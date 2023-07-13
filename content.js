// content.js
// Extract the fields from the page
console.log('SALES CONTENT JS SCRIPT HAS BEEN SUMMONED');
const divs = document.getElementsByTagName('div');
const table = document.getElementById("item_splits").rows;
const lines = [];
var pattern = /<a[^>]*>([^<]*)<\/a>/i;
let iterator = 0;

for (let i = 0; i < table.length; i++) {

    //only look at rows that arent the header row
    if (table[i].getAttribute('class') != "uir-machine-headerrow") {

        const rows = table[i].getElementsByTagName('td');

        //create the object to store the values
        var rowData = {
            config: "",
            lineNumber: "1337",
            autoDrawn: "Yes",
            removeRef: "No",
            item: "item",
            manualDescription: "",
            automatedDescription: "",
            specialNotes: "",
            tag: "NO TAG",
            qty: "NO QTY",
            listPrice: "10",
            priceLevel: "",
            discount: "0",
            discPrice: "0",
            total: "0",
            wall: "NO WALL",
            width: "NO WIDTH",
            height: "NO HEIGHT",
            fire: "none",
            openingType: "Single",
            strike1: "No Strike",
            strike1Loc: "None",
            strike2: "No Strike",
            strike2Loc: "None",
            handing: "None",
            hingeType: "None",
            hingeLocation: "None",
            headPrep1: "",
            headOpeningDegree: "",
            headPrep1Location: "",
            prepOnlyActiveDD: "",
            headPrep2: "",
            headPrep2Location: "",
            ept: "",
            customEPT: "",
            customEPTLoc: "",
            unevenDoubleDoors: "",
            intermediatePivot: "",
            ch1: "",
            ch2: "",
            ch3: "",
            ch4: "",
            ch5: "",
            ch6: "",
            grossProfit: ""
        };

        for (let j = 0; j < rows.length; j++) {
            //console.log(rows[j].getAttribute("data-ns-tooltip"))

            //check to see the name of the column, and assign the value to it.

            if (rows[j].getAttribute("data-ns-tooltip") === "CONFIG") {
                rowData.config = rows[j].innerHTML;

                if (rowData.config.includes("\n")) {
                    rowData.config = rowData.config.replace("\n", "");
                }

                if (rowData.config.includes("&nbsp;")) {
                    rowData.config = rowData.config.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "LINE #") {
                rowData.lineNumber = rows[j].innerHTML;

                if (rowData.lineNumber.includes("\n")) {
                    rowData.lineNumber = rowData.lineNumber.replace("\n", "");
                }

                if (rowData.lineNumber.includes("&nbsp;")) {
                    rowData.lineNumber = rowData.lineNumber.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-CUSTOM - CANNOT BE AUTO DRAWN") {
                rowData.autoDrawn = rows[j].innerHTML;

                if (rowData.autoDrawn.includes("\n")) {
                    rowData.autoDrawn = rowData.autoDrawn.replace("\n", "");
                }

                if (rowData.autoDrawn.includes("&nbsp;")) {
                    rowData.autoDrawn = rowData.autoDrawn.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-REMOVE REFERENCE ONLY") {
                rowData.removeRef = rows[j].innerHTML;

                if (rowData.removeRef.includes("\n")) {
                    rowData.removeRef = rowData.removeRef.replace("\n", "");
                }

                if (rowData.removeRef.includes("&nbsp;")) {
                    rowData.removeRef = rowData.removeRef.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "ITEM") {
                rowData.item = rows[j].innerHTML;

                if (rowData.item.includes("<a")) {
                    var match = rowData.item.match(pattern);
                    rowData.item = match[1];
                }

                if (rowData.item.includes("\n")) {
                    rowData.item = rowData.item.replace("\n", "");
                }

                if (rowData.item.includes("&nbsp;")) {
                    rowData.item = rowData.item.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "MANUAL DESC FORMAT- 1-3/4\\") {
                rowData.manualDescription = rows[j].innerHTML;

                if (rowData.manualDescription.includes("\n")) {
                    rowData.manualDescription = rowData.manualDescription.replace("\n", "");
                }

                if (rowData.manualDescription.includes("&nbsp;")) {
                    rowData.manualDescription = rowData.manualDescription.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "AUTOMATED DESCRIPTION") {
                rowData.automatedDescription = rows[j].innerHTML;

                if (rowData.automatedDescription.includes("\n")) {
                    rowData.automatedDescription = rowData.automatedDescription.replace("\n", "");
                }

                if (rowData.automatedDescription.includes("&nbsp;")) {
                    rowData.automatedDescription = rowData.automatedDescription.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "SPECIAL NOTES - ADD TO AUTOMATED DESCRIPTION") {
                rowData.specialNotes = rows[j].innerHTML;

                if (rowData.specialNotes.includes("\n")) {
                    rowData.specialNotes = rowData.specialNotes.replace("\n", "");
                }

                if (rowData.specialNotes.includes("&nbsp;")) {
                    rowData.specialNotes = rowData.specialNotes.replace("&nbsp;", "");
                }

            }

            if (rows[j].getAttribute("data-ns-tooltip") === "UNIT #") {
                rowData.tag = rows[j].innerHTML;

                if (rowData.tag.includes("\n")) {
                    rowData.tag = rowData.tag.replace("\n", "");
                }

                if (rowData.tag.includes("&nbsp;")) {
                    rowData.tag = rowData.tag.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "QTY") {
                rowData.qty = rows[j].innerHTML;

                if (rowData.qty.includes("\n")) {
                    rowData.qty = rowData.qty.replace("\n", "");
                }

                if (rowData.qty.includes("&nbsp;")) {
                    rowData.qty = rowData.qty.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "LIST PRICE") {
                rowData.listPrice = rows[j].innerHTML;

                if (rowData.listPrice.includes("\n")) {
                    rowData.listPrice = rowData.listPrice.replace("\n", "");
                }

                if (rowData.listPrice.includes("&nbsp;")) {
                    rowData.listPrice = rowData.listPrice.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "PRICE LEVEL") {
                rowData.priceLevel = rows[j].innerHTML;

                if (rowData.priceLevel.includes("\n")) {
                    rowData.priceLevel = rowData.priceLevel.replace("\n", "");
                }

                if (rowData.priceLevel.includes("&nbsp;")) {
                    rowData.priceLevel = rowData.priceLevel.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "DISCOUNT") {
                rowData.discount = rows[j].innerHTML;

                if (rowData.discount.includes("\n")) {
                    rowData.discount = rowData.discount.replace("\n", "");
                }

                if (rowData.discount.includes("&nbsp;")) {
                    rowData.discount = rowData.discount.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "DISC PRICE") {
                rowData.discPrice = rows[j].innerHTML;

                if (rowData.discPrice.includes("\n")) {
                    rowData.discPrice = rowData.discPrice.replace("\n", "");
                }

                if (rowData.discPrice.includes("&nbsp;")) {
                    rowData.discPrice = rowData.discPrice.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "TOTAL") {
                rowData.total = rows[j].innerHTML;

                if (rowData.total.includes("\n")) {
                    rowData.total = rowData.total.replace("\n", "");
                }

                if (rowData.total.includes("&nbsp;")) {
                    rowData.total = rowData.total.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-WALL") {
                rowData.wall = rows[j].innerHTML;

                if (rowData.wall.includes("<a")) {
                    var match = rowData.wall.match(pattern);
                    rowData.wall = match[1];
                }

                if (rowData.wall.includes("\n")) {
                    rowData.wall = rowData.wall.replace("\n", "");
                }

                if (rowData.wall.includes("&nbsp;")) {
                    rowData.wall = rowData.wall.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-FRAME WIDTH") {
                rowData.width = rows[j].innerHTML;

                if (rowData.width.includes("<a")) {
                    var match = rowData.width.match(pattern);
                    rowData.width = match[1];
                }

                if (rowData.width.includes("\n")) {
                    rowData.width = rowData.width.replace("\n", "");
                }

                if (rowData.width.includes("&nbsp;")) {
                    rowData.width = rowData.width.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-FRAME HEIGHT") {
                rowData.height = rows[j].innerHTML;

                if (rowData.height.includes("<a")) {
                    var match = rowData.height.match(pattern);
                    rowData.height = match[1];
                }

                if (rowData.height.includes("\n")) {
                    rowData.height = rowData.height.replace("\n", "");
                }

                if (rowData.height.includes("&nbsp;")) {
                    rowData.height = rowData.height.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-FIRE RATING") {
                rowData.fire = rows[j].innerHTML;

                if (rowData.fire.includes("<a")) {
                    var match = rowData.fire.match(pattern);
                    rowData.fire = match[1];
                }

                if (rowData.fire.includes("\n")) {
                    rowData.fire = rowData.fire.replace("\n", "");
                }

                if (rowData.fire.includes("&nbsp;")) {
                    rowData.fire = rowData.fire.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-OPENING TYPE") {
                rowData.openingType = rows[j].innerHTML;

                if (rowData.openingType.includes("<a")) {
                    var match = rowData.openingType.match(pattern);
                    rowData.openingType = match[1];
                }

                if (rowData.openingType.includes("\n")) {
                    rowData.openingType = rowData.openingType.replace("\n", "");
                }

                if (rowData.openingType.includes("&nbsp;")) {
                    rowData.openingType = rowData.openingType.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-STRIKE 1") {
                rowData.strike1 = rows[j].innerHTML;

                if (rowData.strike1.includes("<a")) {
                    var match = rowData.strike1.match(pattern);
                    rowData.strike1 = match[1];
                }

                if (rowData.strike1.includes("\n")) {
                    rowData.strike1 = rowData.strike1.replace("\n", "");
                }

                if (rowData.strike1.includes("&nbsp;")) {
                    rowData.strike1 = rowData.strike1.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-STRIKE 1 LOCATION (FBOF)") {
                rowData.strike1Loc = rows[j].innerHTML;

                if (rowData.strike1Loc.includes("<a")) {
                    var match = rowData.strike1Loc.match(pattern);
                    rowData.strike1Loc = match[1];
                }

                if (rowData.strike1Loc.includes("\n")) {
                    rowData.strike1Loc = rowData.strike1Loc.replace("\n", "");
                }

                if (rowData.strike1Loc.includes("&nbsp;")) {
                    rowData.strike1Loc = rowData.strike1Loc.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-STRIKE 2") {
                rowData.strike2 = rows[j].innerHTML;

                if (rowData.strike2.includes("<a")) {
                    var match = rowData.strike2.match(pattern);
                    rowData.strike2 = match[1];
                }

                if (rowData.strike2.includes("\n")) {
                    rowData.strike2 = rowData.strike2.replace("\n", "");
                }

                if (rowData.strike2.includes("&nbsp;")) {
                    rowData.strike2 = rowData.strike2.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-STRIKE 2 LOCATION (FBOF)") {
                rowData.strike2Loc = rows[j].innerHTML;

                if (rowData.strike2Loc.includes("<a")) {
                    var match = rowData.strike2Loc.match(pattern);
                    rowData.strike2Loc = match[1];
                }

                if (rowData.strike2Loc.includes("\n")) {
                    rowData.strike2Loc = rowData.strike2Loc.replace("\n", "");
                }

                if (rowData.strike2Loc.includes("&nbsp;")) {
                    rowData.strike2Loc = rowData.strike2Loc.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-HANDING") {
                rowData.handing = rows[j].innerHTML;

                if (rowData.handing.includes("<a")) {
                    var match = rowData.handing.match(pattern);
                    rowData.handing = match[1];
                }

                if (rowData.handing.includes("\n")) {
                    rowData.handing = rowData.handing.replace("\n", "");
                }

                if (rowData.handing.includes("&nbsp;")) {
                    rowData.handing = rowData.handing.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-HINGE TYPE") {
                rowData.hingeType = rows[j].innerHTML;

                if (rowData.hingeType.includes("<a")) {
                    var match = rowData.hingeType.match(pattern);
                    rowData.hingeType = match[1];
                }

                if (rowData.hingeType.includes("\n")) {
                    rowData.hingeType = rowData.hingeType.replace("\n", "");
                }

                if (rowData.hingeType.includes("&nbsp;")) {
                    rowData.hingeType = rowData.hingeType.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-HINGE LOCATION TYPE") {
                rowData.hingeLocation = rows[j].innerHTML;

                if (rowData.hingeLocation.includes("<a")) {
                    var match = rowData.hingeLocation.match(pattern);
                    rowData.hingeLocation = match[1];
                }

                if (rowData.hingeLocation.includes("\n")) {
                    rowData.hingeLocation = rowData.hingeLocation.replace("\n", "");
                }

                if (rowData.hingeLocation.includes("&nbsp;")) {
                    rowData.hingeLocation = rowData.hingeLocation.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-HEAD PREP 1") {
                rowData.headPrep1 = rows[j].innerHTML;

                if (rowData.headPrep1.includes("<a")) {
                    var match = rowData.headPrep1.match(pattern);
                    rowData.headPrep1 = match[1];
                }

                if (rowData.headPrep1.includes("\n")) {
                    rowData.headPrep1 = rowData.headPrep1.replace("\n", "");
                }

                if (rowData.headPrep1.includes("&nbsp;")) {
                    rowData.headPrep1 = rowData.headPrep1.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-HEAD 1 OPENING DEGREE") {
                rowData.headOpeningDegree = rows[j].innerHTML;

                if (rowData.headOpeningDegree.includes("<a")) {
                    var match = rowData.headOpeningDegree.match(pattern);
                    rowData.headOpeningDegree = match[1];
                }

                if (rowData.headOpeningDegree.includes("\n")) {
                    rowData.headOpeningDegree = rowData.headOpeningDegree.replace("\n", "");
                }

                if (rowData.headOpeningDegree.includes("&nbsp;")) {
                    rowData.headOpeningDegree = rowData.headOpeningDegree.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-HEAD PREP 1 LOCATION") {
                rowData.headPrep1Location = rows[j].innerHTML;

                if (rowData.headPrep1Location.includes("<a")) {
                    var match = rowData.headPrep1Location.match(pattern);
                    rowData.headPrep1Location = match[1];
                }

                if (rowData.headPrep1Location.includes("\n")) {
                    rowData.headPrep1Location = rowData.headPrep1Location.replace("\n", "");
                }

                if (rowData.headPrep1Location.includes("&nbsp;")) {
                    rowData.headPrep1Location = rowData.headPrep1Location.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C- PREP ONLY ACTIVE SIDE ON DD") {
                rowData.prepOnlyActiveDD = rows[j].innerHTML;

                if (rowData.prepOnlyActiveDD.includes("<a")) {
                    var match = rowData.prepOnlyActiveDD.match(pattern);
                    rowData.prepOnlyActiveDD = match[1];
                }

                if (rowData.prepOnlyActiveDD.includes("\n")) {
                    rowData.prepOnlyActiveDD = rowData.prepOnlyActiveDD.replace("\n", "");
                }

                if (rowData.prepOnlyActiveDD.includes("&nbsp;")) {
                    rowData.prepOnlyActiveDD = rowData.prepOnlyActiveDD.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-HEAD PREP 2") {
                rowData.headPrep2 = rows[j].innerHTML;

                if (rowData.headPrep2.includes("<a")) {
                    var match = rowData.headPrep2.match(pattern);
                    rowData.headPrep2 = match[1];
                }

                if (rowData.headPrep2.includes("\n")) {
                    rowData.headPrep2 = rowData.headPrep2.replace("\n", "");
                }

                if (rowData.headPrep2.includes("&nbsp;")) {
                    rowData.headPrep2 = rowData.headPrep2.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-HEAD PREP 2 LOCATION") {
                rowData.headPrep2Location = rows[j].innerHTML;

                if (rowData.headPrep2Location.includes("<a")) {
                    var match = rowData.headPrep2Location.match(pattern);
                    rowData.headPrep2Location = match[1];
                }

                if (rowData.headPrep2Location.includes("\n")) {
                    rowData.headPrep2Location = rowData.headPrep2Location.replace("\n", "");
                }

                if (rowData.headPrep2Location.includes("&nbsp;")) {
                    rowData.headPrep2Location = rowData.headPrep2Location.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-EPT") {
                rowData.ept = rows[j].innerHTML;

                if (rowData.ept.includes("<a")) {
                    var match = rowData.ept.match(pattern);
                    rowData.ept = match[1];
                }

                if (rowData.ept.includes("\n")) {
                    rowData.ept = rowData.ept.replace("\n", "");
                }

                if (rowData.ept.includes("&nbsp;")) {
                    rowData.ept = rowData.ept.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-CUSTOM EPT") {
                rowData.customEPT = rows[j].innerHTML;

                if (rowData.customEPT.includes("<a")) {
                    var match = rowData.customEPT.match(pattern);
                    rowData.customEPT = match[1];
                }

                if (rowData.customEPT.includes("\n")) {
                    rowData.customEPT = rowData.customEPT.replace("\n", "");
                }

                if (rowData.customEPT.includes("&nbsp;")) {
                    rowData.customEPT = rowData.customEPT.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C- CUSTOM EPT LOCATION") {
                rowData.customEPTLoc = rows[j].innerHTML;

                if (rowData.customEPTLoc.includes("<a")) {
                    var match = rowData.customEPTLoc.match(pattern);
                    rowData.customEPTLoc = match[1];
                }

                if (rowData.customEPTLoc.includes("\n")) {
                    rowData.customEPTLoc = rowData.customEPTLoc.replace("\n", "");
                }

                if (rowData.customEPTLoc.includes("&nbsp;")) {
                    rowData.customEPTLoc = rowData.customEPTLoc.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-UNEVEN DOUBLE DOORS") {
                rowData.unevenDoubleDoors = rows[j].innerHTML;

                if (rowData.unevenDoubleDoors.includes("<a")) {
                    var match = rowData.unevenDoubleDoors.match(pattern);
                    rowData.unevenDoubleDoors = match[1];
                }

                if (rowData.unevenDoubleDoors.includes("\n")) {
                    rowData.unevenDoubleDoors = rowData.unevenDoubleDoors.replace("\n", "");
                }

                if (rowData.unevenDoubleDoors.includes("&nbsp;")) {
                    rowData.unevenDoubleDoors = rowData.unevenDoubleDoors.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-INTERMEDIATE PIVOT") {
                rowData.intermediatePivot = rows[j].innerHTML;

                if (rowData.intermediatePivot.includes("<a")) {
                    var match = rowData.intermediatePivot.match(pattern);
                    rowData.intermediatePivot = match[1];
                }

                if (rowData.intermediatePivot.includes("\n")) {
                    rowData.intermediatePivot = rowData.intermediatePivot.replace("\n", "");
                }

                if (rowData.intermediatePivot.includes("&nbsp;")) {
                    rowData.intermediatePivot = rowData.intermediatePivot.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "CH1") {
                rowData.ch1 = rows[j].innerHTML;

                if (rowData.ch1.includes("\n")) {
                    rowData.ch1 = rowData.ch1.replace("\n", "");
                }

                if (rowData.ch1.includes("&nbsp;")) {
                    rowData.ch1 = rowData.ch1.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "CH2") {
                rowData.ch2 = rows[j].innerHTML;

                if (rowData.ch2.includes("\n")) {
                    rowData.ch2 = rowData.ch2.replace("\n", "");
                }

                if (rowData.ch2.includes("&nbsp;")) {
                    rowData.ch2 = rowData.ch2.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "CH3") {
                rowData.ch3 = rows[j].innerHTML;


                if (rowData.ch3.includes("\n")) {
                    rowData.ch3 = rowData.ch3.replace("\n", "");
                }

                if (rowData.ch3.includes("&nbsp;")) {
                    rowData.ch3 = rowData.ch3.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "CH4") {
                rowData.ch4 = rows[j].innerHTML;

                if (rowData.ch4.includes("\n")) {
                    rowData.ch4 = rowData.ch4.replace("\n", "");
                }

                if (rowData.ch4.includes("&nbsp;")) {
                    rowData.ch4 = rowData.ch4.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "CH5") {
                rowData.ch5 = rows[j].innerHTML;

                if (rowData.ch5.includes("\n")) {
                    rowData.ch5 = rowData.ch5.replace("\n", "");
                }

                if (rowData.ch5.includes("&nbsp;")) {
                    rowData.ch5 = rowData.ch5.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "CH6") {
                rowData.ch6 = rows[j].innerHTML;

                if (rowData.ch6.includes("\n")) {
                    rowData.ch6 = rowData.ch6.replace("\n", "");
                }

                if (rowData.ch6.includes("&nbsp;")) {
                    rowData.ch6 = rowData.ch6.replace("&nbsp;", "");
                }
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "EST. GROSS PROFIT PERCENT") {
                rowData.grossProfit = rows[j].innerHTML;

                if (rowData.grossProfit.includes("\n")) {
                    rowData.grossProfit = rowData.grossProfit.replace("\n", "");
                }

                if (rowData.grossProfit.includes("&nbsp;")) {
                    rowData.grossProfit = rowData.grossProfit.replace("&nbsp;", "");
                }
            }
        }

        //push the line to the extension
        lines[iterator] = rowData;
        iterator = iterator + 1;

    }
}

// Send the extracted data to the background script
if (lines != null) {
    console.log("Contents of 'lines' object: " + lines);
    chrome.runtime.sendMessage({ lines });
}
