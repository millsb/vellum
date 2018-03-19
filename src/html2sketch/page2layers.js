import Page from "html-sketchapp/html2asketch/page.js";
import SymbolMaster from "html-sketchapp/html2asketch/symbolMaster.js";
import nodeToSketchLayers from "html-sketchapp/html2asketch/nodeToSketchLayers.js";


function bemClassToText(bemClass) {
    return bemClass
        ? bemClass.replace("-", " ")
        : "";
}

function buildSymbolNameFromBem(classes) {
    const mainClass = classes.shift();
    const subClasses = Array.from(classes)
        .map(className => className && className.replace(mainClass, "").replace("--", ""))
        .join(" ");

    return `${bemClassToText(mainClass)}/${subClasses || "_default_"}`;
}

function buildLayerNameFromBem(classes) {
    const mainClass = classes[0];
    if (mainClass) {
        if (mainClass.indexOf("__") > -1) {
            // is a child
            return mainClass.replace(/^[a-z-]+__/, "");
        } else {
            // is a block
            return bemClassToText(mainClass);
        }
    }
}

export async function getASketchPage() {
    const page = new Page({
        width: document.body.offsetWidth,
        height: document.body.offsetHeight
    });

    page.setName('Vellum Export');
    const symbolPromises = Array.from(document.querySelectorAll(".inkwell > div *"))
        .map(async item => {
            const name = buildSymbolNameFromBem(Array.from(item.classList));
            const {left: x, top: y} = item.getBoundingClientRect();
            const symbol = new SymbolMaster({x,y});

            symbol.setName(name);

            const parentAndChildren = [item, ...item.querySelectorAll("*")];

            const layerPromises = Array.from(parentAndChildren)
                .map(async node => {
                    const layers = await nodeToSketchLayers(node);
                    return layers.map(layer => {
                        layer.setName(buildLayerNameFromBem(node.classList));
                        return layer;
                    });
                });

            const layers = await Promise.all(layerPromises);
            layers.reduce((prev, current) => prev.concat(current), [])
                .filter(layer => layer !== null)
                .forEach(layer => symbol.addLayer(layer));

            return symbol;
        });

        const symbols = await Promise.all(symbolPromises);

        symbols.forEach(obj => page.addLayer(obj));

        console.log(page);
        return page.toJSON();
}
