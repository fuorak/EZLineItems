// popup.js
// Get the extracted fields from the background script
chrome.runtime.sendMessage({ action: 'getFields' }, function (response) {

    console.log("requesting fields");
    console.log(response);
    console.log(response.constructor);
    // Get the table
    var table = document.getElementById('lineTable');

    //set variables for hinge counts
    let ry60Count = 0;
    let ry80Count = 0;
    let ry120Count = 0;
    let soss216Count = 0;
    let soss218Count = 0;
    let soss418Count = 0;
    let mortise4Count = 0;
    let mortise412Count = 0;
    let te340Count = 0;
    let te527Count = 0;
    let te540Count = 0;


    // Loop through the data and update the table

    if (response[0] != null) {
        for (var i = 0; i < response.length; i++) {
            var row = table.insertRow(i + 1);
            var currentRow = response[i];
            console.log(response[i]);
            console.log(currentRow);


            for (var j = 0; j < 41; j++) {
                var cell = row.insertCell(j);

                if (j === 0) {
                    cell.innerHTML = currentRow.config;
                }

                if (j === 1) {
                    cell.innerHTML = currentRow.lineNumber;
                }

                if (j === 2) {
                    cell.innerHTML = currentRow.grossProfit;
                }

                if (j === 3) {
                    cell.innerHTML = currentRow.autoDrawn;
                }

                if (j === 4) {
                    cell.innerHTML = currentRow.removeRef;
                }
                /*
                if (j === 5) {
                    cell.innerHTML = currentRow.item;
                }
                */
                
                if (j === 6) {
                    if (currentRow.manualDescription == "") {
                        cell.innerHTML = currentRow.automatedDescription;
                    } else {
                        cell.innerHTML = currentRow.manualDescription;
                    }
                }
                /*
                if (j === 7) {
                    cell.innerHTML = currentRow.automatedDescription;
                }
            

                if (j === 8) {
                    cell.innerHTML = currentRow.specialNotes;
                }
                */

                if (j === 9) {
                    cell.innerHTML = currentRow.tag;
                }

                if (j === 10) {
                    cell.innerHTML = currentRow.qty;
                }

                /*
                 * removed per Beatrice's request
                if (j === 11) {
                    cell.innerHTML = currentRow.listPrice;
                }

                if (j === 12) {
                    cell.innerHTML = currentRow.priceLevel;
                }

                if (j === 13) {
                    cell.innerHTML = currentRow.discount;
                }

                if (j === 14) {
                    cell.innerHTML = currentRow.discPrice;
                }
                */

                if (j === 11) {
                    cell.innerHTML = currentRow.total;
                }

                if (j === 12) {
                    cell.innerHTML = currentRow.wall;
                }

                if (j === 13) {
                    cell.innerHTML = currentRow.width;
                }

                if (j === 14) {
                    cell.innerHTML = currentRow.height;
                }

                if (j === 15) {
                    cell.innerHTML = currentRow.fire;
                }

                if (j === 16) {
                    cell.innerHTML = currentRow.openingType;
                }

                if (j === 17) {
                    cell.innerHTML = currentRow.strike1;
                }

                if (j === 18) {
                    cell.innerHTML = currentRow.strike1Loc;
                }

                if (j === 19) {
                    cell.innerHTML = currentRow.strike2;
                }

                if (j === 20) {
                    cell.innerHTML = currentRow.strike2Loc;
                }

                if (j === 21) {
                    cell.innerHTML = currentRow.handing;
                }

                if (j === 22) {
                    cell.innerHTML = currentRow.hingeType;

                    if (currentRow.hingeType.includes("RY60")) {
                        var hingeCount = parseInt(currentRow.hingeType.slice(-1));

                        if (currentRow.handing.includes("DD")) {
                            hingeCount = hingeCount * 2;
                        }

                        hingeCount = hingeCount * currentRow.qty;

                        ry60Count = ry60Count + hingeCount;
                    }

                    if (currentRow.hingeType.includes("RY80")) {
                        var hingeCount = parseInt(currentRow.hingeType.slice(-1));

                        if (currentRow.handing.includes("DD")) {
                            hingeCount = hingeCount * 2;
                        }

                        hingeCount = hingeCount * currentRow.qty;

                        ry80Count = ry80Count + hingeCount;
                    }

                    if (currentRow.hingeType.includes("RY120")) {
                        var hingeCount = parseInt(currentRow.hingeType.slice(-1));

                        if (currentRow.handing.includes("DD")) {
                            hingeCount = hingeCount * 2;
                        }

                        hingeCount = hingeCount * currentRow.qty;

                        ry120Count = ry120Count + hingeCount;
                    }

                    if (currentRow.hingeType.includes("216")) {
                        var hingeCount = parseInt(currentRow.hingeType.slice(-1));

                        if (currentRow.handing.includes("DD")) {
                            hingeCount = hingeCount * 2;
                        }

                        hingeCount = hingeCount * currentRow.qty;

                        soss216Count = soss216Count + hingeCount;
                    }

                    if (currentRow.hingeType.includes("218")) {
                        var hingeCount = parseInt(currentRow.hingeType.slice(-1));

                        if (currentRow.handing.includes("DD")) {
                            hingeCount = hingeCount * 2;
                        }

                        hingeCount = hingeCount * currentRow.qty;

                        soss218Count = soss218Count + hingeCount;
                    }

                    if (currentRow.hingeType.includes("418")) {
                        var hingeCount = parseInt(currentRow.hingeType.slice(-1));

                        if (currentRow.handing.includes("DD")) {
                            hingeCount = hingeCount * 2;
                        }

                        hingeCount = hingeCount * currentRow.qty;

                        soss418Count = soss418Count + hingeCount;
                    }

                    if (currentRow.hingeType.includes("4-1/2")) {
                        var hingeCount = parseInt(currentRow.hingeType.slice(-1));

                        if (currentRow.handing.includes("DD")) {
                            hingeCount = hingeCount * 2;
                        }

                        hingeCount = hingeCount * currentRow.qty;

                        mortise412Count = mortise412Count + hingeCount;
                    }

                    if (currentRow.hingeType.includes("4\"")) {
                        var hingeCount = parseInt(currentRow.hingeType.slice(-1));

                        if (currentRow.handing.includes("DD")) {
                            hingeCount = hingeCount * 2;
                        }

                        hingeCount = hingeCount * currentRow.qty;

                        mortise4Count = mortise4Count + hingeCount;
                    }

                    if (currentRow.hingeType.includes("TE340")) {
                        var hingeCount = parseInt(currentRow.hingeType.slice(-1));

                        if (currentRow.handing.includes("DD")) {
                            hingeCount = hingeCount * 2;
                        }

                        hingeCount = hingeCount * currentRow.qty;

                        te340Count = te340Count + hingeCount;
                    }

                    if (currentRow.hingeType.includes("TE527")) {
                        var hingeCount = parseInt(currentRow.hingeType.slice(-1));

                        if (currentRow.handing.includes("DD")) {
                            hingeCount = hingeCount * 2;
                        }

                        hingeCount = hingeCount * currentRow.qty;

                        te527Count = te527Count + hingeCount;
                    }

                    if (currentRow.hingeType.includes("TE540")) {
                        var hingeCount = parseInt(currentRow.hingeType.slice(-1));

                        if (currentRow.handing.includes("DD")) {
                            hingeCount = hingeCount * 2;
                        }

                        hingeCount = hingeCount * currentRow.qty;

                        te540Count = te540Count + hingeCount;
                    }
                }

                if (j === 23) {
                    cell.innerHTML = currentRow.hingeLocation;
                }

                if (j === 24) {
                    cell.innerHTML = currentRow.headPrep1;
                }

                if (j === 25) {
                    cell.innerHTML = currentRow.headOpeningDegree;
                }

                if (j === 26) {
                    cell.innerHTML = currentRow.headPrep1Location;
                }

                if (j === 27) {
                    cell.innerHTML = currentRow.prepOnlyActiveDD;
                }

                if (j === 28) {
                    cell.innerHTML = currentRow.headPrep2;
                }

                if (j === 29) {
                    cell.innerHTML = currentRow.headPrep2Location;
                }

                if (j === 30) {
                    cell.innerHTML = currentRow.ept;
                }

                if (j === 31) {
                    cell.innerHTML = currentRow.customEPT;
                }

                if (j === 32) {
                    cell.innerHTML = currentRow.customEPTLoc;
                }

                if (j === 33) {
                    cell.innerHTML = currentRow.unevenDoubleDoors;
                }

                if (j === 34) {
                    cell.innerHTML = currentRow.intermediatePivot;
                }

                if (j === 35) {
                    cell.innerHTML = currentRow.ch1;
                }

                if (j === 36) {
                    cell.innerHTML = currentRow.ch2;
                }

                if (j === 37) {
                    cell.innerHTML = currentRow.ch3;
                }

                if (j === 38) {
                    cell.innerHTML = currentRow.ch4;
                }

                if (j === 39) {
                    cell.innerHTML = currentRow.ch5;
                }

                if (j === 40) {
                    cell.innerHTML = currentRow.ch6;
                }

            }
        }
    }

    console.log("RY60's : " + ry60Count);
    console.log("RY80's : " + ry80Count);
    console.log("RY120's : " + ry120Count);
    console.log("216's : " + soss216Count);
    console.log("218's : " + soss218Count);
    console.log("418's : " + soss418Count);
    console.log("412's : " + mortise412Count);
    console.log("4's : " + mortise4Count);
    console.log("TE340's : " + te340Count);
    console.log("TE527's : " + te527Count);
    console.log("TE540's : " + te540Count);
});