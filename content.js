// content.js
// Extract the fields from the page
console.log('SALES CONTENT JS SCRIPT HAS BEEN SUMMONED');
const divs = document.getElementsByTagName('div');
const table = document.getElementById("item_splits").rows;
const lines = [];
let iterator = 0;

for (let i = 0; i < table.length; i++) {
    console.log(table[i]);

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
            ch6: ""
        };

        for (let j = 0; j < rows.length; j++) {
            //console.log(rows[j].getAttribute("data-ns-tooltip"))

            //check to see the name of the column, and assign the value to it.

            if (rows[j].getAttribute("data-ns-tooltip") === "CONFIG") {
                rowData.config = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "LINE #") {
                rowData.lineNumber = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-CUSTOM - CANNOT BE AUTO DRAWN") {
                rowData.autoDrawn = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-REMOVE REFERENCE ONLY") {
                rowData.removeRef = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "ITEM") {
                rowData.item = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "MANUAL DESC FORMAT- 1-3/4\\") {
                rowData.manualDescription = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "AUTOMATED DESCRIPTION") {
                rowData.automatedDescription = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "SPECIAL NOTES - ADD TO AUTOMATED DESCRIPTION") {
                rowData.specialNotes = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "UNIT #") {
                rowData.tag = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "QTY") {
                rowData.qty = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "LIST PRICE") {
                rowData.listPrice = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "PRICE LEVEL") {
                rowData.priceLevel = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "DISCOUNT") {
                rowData.discount = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "DISC PRICE") {
                rowData.discPrice = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "TOTAL") {
                rowData.total = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-WALL") {
                rowData.wall = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-FRAME WIDTH") {
                rowData.width = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-FRAME HEIGHT") {
                rowData.height = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-FIRE RATING") {
                rowData.fire = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-OPENING TYPE") {
                rowData.openingType = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-STRIKE 1") {
                rowData.strike1 = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-STRIKE 1 LOCATION (FBOF)") {
                rowData.strike1Loc = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-STRIKE 2") {
                rowData.strike2 = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-STRIKE 2 LOCATION (FBOF)") {
                rowData.strike2Loc = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-HANDING") {
                rowData.handing = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-HINGE TYPE") {
                rowData.hingeType = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-HINGE LOCATION TYPE") {
                rowData.hingeLocation = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-HEAD PREP 1") {
                rowData.headPrep1 = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-HEAD 1 OPENING DEGREE") {
                rowData.headOpeningDegree = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-HEAD PREP 1 LOCATION") {
                rowData.headPrep1Location = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C- PREP ONLY ACTIVE SIDE ON DD") {
                rowData.prepOnlyActiveDD = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-HEAD PREP 2") {
                rowData.headPrep2 = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-HEAD PREP 2 LOCATION") {
                rowData.headPrep2Location = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-EPT") {
                rowData.ept = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-CUSTOM EPT") {
                rowData.customEPT = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C- CUSTOM EPT LOCATION") {
                rowData.customEPTLoc = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-UNEVEN DOUBLE DOORS") {
                rowData.unevenDoubleDoors = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "C-INTERMEDIATE PIVOT") {
                rowData.intermediatePivot = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "CH1") {
                rowData.ch1 = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "CH2") {
                rowData.ch2 = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "CH3") {
                rowData.ch3 = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "CH4") {
                rowData.ch4 = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "CH5") {
                rowData.ch5 = rows[j].innerHTML;
            }

            if (rows[j].getAttribute("data-ns-tooltip") === "CH6") {
                rowData.ch6 = rows[j].innerHTML;
            }
        }

        //push the line to the extension
        lines[iterator] = rowData;
        iterator = iterator + 1;

    }
}
/*
let frameQty = 0;
let doorQty = 0;
let salesOrder = "SO-NONE";
let orderConfirmation = "THE FUTURE";
let ezShipDate = "THE FUTURE";
let programmingInitials = "T0";
let doorInitials = "NONE";
let orderNotes = "AHHH";


for (let i = 0; i < divs.length; i++) {
    //frame qty
    if (divs[i].getAttribute('class') === "uir-field-wrapper" && divs[i].getAttribute('data-searchable-id') === "custom191custom191custbody_frameqty") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly") {
                frameQty = spans[j].innerHTML;
            }
        }
    }

    //door qty
    if (divs[i].getAttribute('class') === "uir-field-wrapper uir-inline-tag" && divs[i].getAttribute('data-searchable-id') === "custom191custom191custbody_doorquantity") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly") {
                doorQty = spans[j].innerHTML;
            }
        }
    }

    //programming initials
    if (divs[i].getAttribute('class') === "uir-field-wrapper" && divs[i].getAttribute('data-searchable-id') === "custom191custom191custbody_programmingneeded") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly") {
                programmingInitials = spans[j].innerHTML;
            }
        }
    }

    //door initials
    if (divs[i].getAttribute('class') === "uir-field-wrapper" && divs[i].getAttribute('data-searchable-id') === "custom191custom191custbody_nesting") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly") {
                doorInitials = spans[j].innerHTML;
            }
        }
    }

    //Order confirmation
    if (divs[i].getAttribute('class') === "uir-field-wrapper" && divs[i].getAttribute('data-searchable-id') === "shippingshippingcustbody_ezconceptorderconfirmation") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly") {
                orderConfirmation = spans[j].innerHTML;
            }
        }
    }

    //Ez ship date
    if (divs[i].getAttribute('class') === "uir-field-wrapper" && divs[i].getAttribute('data-searchable-id') === "shippingshippingcustbody_ezconceptshipdate1") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly") {
                ezShipDate = spans[j].innerHTML;
            }
        }
    }

    //Order notes
    if (divs[i].getAttribute('class') === "uir-field-wrapper uir-long-text" && divs[i].getAttribute('data-searchable-id') === "custom191custom191custbody_ordernotes") {
        const spans = divs[i].getElementsByTagName('span');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-field inputreadonly uir-resizable") {
                orderNotes = spans[j].innerHTML;
            }
        }
    }

    //sales order
    if (divs[i].getAttribute('class') === "uir-page-title-secondline") {
        const spans = divs[i].getElementsByTagName('div');

        for (let j = 0; j < spans.length; j++) {
            if (spans[j].getAttribute('class') === "uir-record-id") {
                salesOrder = spans[j].innerHTML;
            }
        }
    }
}


const fields = {
    salesOrder: salesOrder,
    orderConfirmation: orderConfirmation,
    ezShipDate: ezShipDate,
    frameQty: frameQty,
    doorQty: doorQty,
    programmingInitials: programmingInitials,
    doorInitials: doorInitials,
    orderNotes: orderNotes,
    // Add more fields as needed
};

*/


// Send the extracted data to the background script
chrome.runtime.sendMessage({ lines });

/*
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'getFields') {
        chrome.runtime.sendMessage({ fields });
    }
    console.log("sent message to background.js");
});
*/