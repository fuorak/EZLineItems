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
    let soss416Count = 0;
    let soss418Count = 0;
    let mortise4Count = 0;
    let mortise412Count = 0;
    let te340Count = 0;
    let te527Count = 0;
    let te540Count = 0;

    //variables for frame counts
    let srcCount = 0;
    let srdCount = 0;
    let iscCount = 0;
    let isdCount = 0;
    let ezaCount = 0;
    let ezcCount = 0;
    let drcCount = 0;
    let drdCount = 0;
    let cavkitCount = 0;
    let fireCount = 0;

    //variables for prep counts
    let nohaCount = 0;
    let elcCount = 0;
    let hes8300Count = 0;
    let ipivotCount = 0;
    let eptCount = 0;

    //variables for head prep counts
    let lcn2030Count = 0;
    let lcn3130Count = 0;
    let abh1000Count = 0;
    let abh1000rCount = 0;
    let abh4000Count = 0;
    let rixsonS1Count = 0;
    let rixsonS2Count = 0;
    let pivotCount = 0;
    let rock100Count = 0;
    let rock200Count = 0;
    let rocyorkccCount = 0;
    let dormaits96Count = 0;
    let gj100Count = 0;
    let gj400Count = 0;
    let gj450Count = 0;
    let cvrCount = 0;
    let dps1Count = 0;
    let dps34Count = 0;
    let pls24Count = 0;
    let surfacereinforcementCount = 0;
    let m19Count = 0;
    let r119Count = 0;


    // Loop through the data and update the table

    if (response[0] != null) {
        for (var i = 0; i < response.length; i++) {
            var row = table.insertRow(i + 1);
            var currentRow = response[i];
            console.log(response[i]);
            console.log(currentRow);


            for (var j = 0; j < 38; j++) {
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
                
                if (j === 5) {
                    if (currentRow.manualDescription == "") {
                        cell.innerHTML = currentRow.automatedDescription;
                    } else {
                        cell.innerHTML = currentRow.manualDescription;
                    }

                    if (currentRow.automatedDescription.includes("SRC")) {
                        srcCount = srcCount + parseInt(currentRow.qty);
                    }

                    if (currentRow.automatedDescription.includes("SRD")) {
                        srdCount = srdCount + parseInt(currentRow.qty);
                    }

                    if (currentRow.automatedDescription.includes("ISC")) {
                        iscCount = iscCount + parseInt(currentRow.qty);
                    }

                    if (currentRow.automatedDescription.includes("ISD")) {
                        isdCount = isdCount + parseInt(currentRow.qty);
                    }

                    if (currentRow.automatedDescription.includes("DRC")) {
                        drcCount = drcCount + parseInt(currentRow.qty);
                    }

                    if (currentRow.automatedDescription.includes("DRD")) {
                        drdCount = drdCount + parseInt(currentRow.qty);
                    }

                    if (currentRow.automatedDescription.includes("EZA")) {
                        ezaCount = ezaCount + parseInt(currentRow.qty);
                    }

                    if (currentRow.automatedDescription.includes("EZC")) {
                        ezcCount = ezcCount + parseInt(currentRow.qty);
                    }

                    if (currentRow.automatedDescription.includes("CavKit")) {
                        cavkitCount = cavkitCount + parseInt(currentRow.qty);
                    }

                    if (currentRow.automatedDescription.includes("NoHa")) {
                        nohaCount = nohaCount + parseInt(currentRow.qty);
                    }

                    if (currentRow.automatedDescription.includes("ELC")) {
                        elcCount = elcCount + parseInt(currentRow.qty);
                    }

                    if (currentRow.automatedDescription.includes("HES 8300")) {
                        hes8300Count = hes8300Count + parseInt(currentRow.qty);
                    }

                    if (currentRow.fire.includes("90") || currentRow.fire.includes("20") || currentRow.fire.includes("30")) {
                        fireCount = fireCount + parseInt(currentRow.qty);
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

                if (j === 6) {
                    cell.innerHTML = currentRow.tag;
                }

                if (j === 7) {
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

                if (j === 8) {
                    cell.innerHTML = currentRow.total;
                }

                if (j === 9) {
                    cell.innerHTML = currentRow.wall;
                }

                if (j === 10) {
                    cell.innerHTML = currentRow.width;
                }

                if (j === 11) {
                    cell.innerHTML = currentRow.height;
                }

                if (j === 12) {
                    cell.innerHTML = currentRow.fire;
                }

                if (j === 13) {
                    cell.innerHTML = currentRow.openingType;
                }

                if (j === 14) {
                    cell.innerHTML = currentRow.strike1;
                }

                if (j === 15) {
                    cell.innerHTML = currentRow.strike1Loc;
                }

                if (j === 16) {
                    cell.innerHTML = currentRow.strike2;
                }

                if (j === 17) {
                    cell.innerHTML = currentRow.strike2Loc;
                }

                if (j === 18) {
                    cell.innerHTML = currentRow.handing;
                }

                if (j === 19) {
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

                    if (currentRow.hingeType.includes("416")) {
                        var hingeCount = parseInt(currentRow.hingeType.slice(-1));

                        if (currentRow.handing.includes("DD")) {
                            hingeCount = hingeCount * 2;
                        }

                        hingeCount = hingeCount * currentRow.qty;

                        soss416Count = soss416Count + hingeCount;
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

                if (j === 20) {
                    cell.innerHTML = currentRow.hingeLocation;
                }

                if (j === 21) {
                    cell.innerHTML = currentRow.headPrep1;

                    if (currentRow.headPrep1.includes("LCN 2030")) {
                        if (currentRow.handing.includes("DD")) {
                            lcn2030Count = lcn2030Count + (parseInt(currentRow.qty) * 2);
                        } else {
                            lcn2030Count = lcn2030Count + parseInt(currentRow.qty);
                        }
                    }

                    if (currentRow.headPrep1.includes("LCN 3130")) {
                        if (currentRow.handing.includes("DD")) {
                            lcn3130Count = lcn3130Count + (parseInt(currentRow.qty) * 2);
                        } else {
                            lcn3130Count = lcn3130Count + parseInt(currentRow.qty);
                        }
                    }

                    if (currentRow.headPrep1.includes("ABH 1000")) {
                        if (currentRow.handing.includes("DD")) {
                            abh1000Count = abh1000Count + (parseInt(currentRow.qty) * 2);
                        } else {
                            abh1000Count = abh1000Count + parseInt(currentRow.qty);
                        }
                    }

                    if (currentRow.headPrep1.includes("ABH 1000R")) {
                        if (currentRow.handing.includes("DD")) {
                            abh1000rCount = abh1000rCount + (parseInt(currentRow.qty) * 2);
                        } else {
                            abh1000rCount = abh1000rCount + parseInt(currentRow.qty);
                        }
                    }

                    if (currentRow.headPrep1.includes("ABH 4000")) {
                        if (currentRow.handing.includes("DD")) {
                            abh4000Count = abh4000Count + (parseInt(currentRow.qty) * 2);
                        } else {
                            abh4000Count = abh4000Count + parseInt(currentRow.qty);
                        }
                    }

                    if (currentRow.headPrep1.includes("Rixson S1")) {
                        if (currentRow.handing.includes("DD")) {
                            rixsonS1Count = rixsonS1Count + (parseInt(currentRow.qty) * 2);
                        } else {
                            rixsonS1Count = rixsonS1Count + parseInt(currentRow.qty);
                        }
                    }

                    if (currentRow.headPrep1.includes("Rixson S2")) {
                        if (currentRow.handing.includes("DD")) {
                            rixsonS2Count = rixsonS2Count + (parseInt(currentRow.qty) * 2);
                        } else {
                            rixsonS2Count = rixsonS2Count + parseInt(currentRow.qty);
                        }
                    }

                    if (currentRow.headPrep1.includes("Rixson 180")) {
                        if (currentRow.handing.includes("DD")) {
                            pivotCount = pivotCount + (parseInt(currentRow.qty) * 2);
                        } else {
                            pivotCount = pivotCount + parseInt(currentRow.qty);
                        }
                    }

                    if (currentRow.headPrep1.includes("Rockwood OH 100")) {
                        if (currentRow.handing.includes("DD")) {
                            rock100Count = rock100Count + (parseInt(currentRow.qty) * 2);
                        } else {
                            rock100Count = rock100Count + parseInt(currentRow.qty);
                        }
                    }

                    if (currentRow.headPrep1.includes("Rockwood OH 200")) {
                        if (currentRow.handing.includes("DD")) {
                            rock200Count = rock200Count + (parseInt(currentRow.qty) * 2);
                        } else {
                            rock200Count = rock200Count + parseInt(currentRow.qty);
                        }
                    }

                    if (currentRow.headPrep1.includes("RocYork Concealed Closer")) {
                        if (currentRow.handing.includes("DD")) {
                            rocyorkccCount = rocyorkccCount + (parseInt(currentRow.qty) * 2);
                        } else {
                            rocyorkccCount = rocyorkccCount + parseInt(currentRow.qty);
                        }
                    }

                    if (currentRow.headPrep1.includes("Dorma ITS96")) {
                        if (currentRow.handing.includes("DD")) {
                            dormaits96Count = dormaits96Count + (parseInt(currentRow.qty) * 2);
                        } else {
                            dormaits96Count = dormaits96Count + parseInt(currentRow.qty);
                        }
                    }

                    if (currentRow.headPrep1.includes("GJ 100")) {
                        if (currentRow.handing.includes("DD")) {
                            gj100Count = gj100Count + (parseInt(currentRow.qty) * 2);
                        } else {
                            gj100Count = gj100Count + parseInt(currentRow.qty);
                        }
                    }

                    if (currentRow.headPrep1.includes("GJ 410")) {
                        if (currentRow.handing.includes("DD")) {
                            gj400Count = gj400Count + (parseInt(currentRow.qty) * 2);
                        } else {
                            gj400Count = gj400Count + parseInt(currentRow.qty);
                        }
                    }

                    if (currentRow.headPrep1.includes("GJ 450")) {
                        if (currentRow.handing.includes("DD")) {
                            gj450Count = gj450Count + (parseInt(currentRow.qty) * 2);
                        } else {
                            gj450Count = gj450Count + parseInt(currentRow.qty);
                        }
                    }

                    if (currentRow.headPrep1.includes("CVR")) {
                        if (currentRow.handing.includes("DD")) {
                            cvrCount = cvrCount + (parseInt(currentRow.qty) * 2);
                        } else {
                            cvrCount = cvrCount + parseInt(currentRow.qty);
                        }
                    }

                    if (currentRow.headPrep1.includes("1\" Dia DPS")) {
                        if (currentRow.handing.includes("DD")) {
                            dps1Count = dps1Count + (parseInt(currentRow.qty) * 2);
                        } else {
                            dps1Count = dps1Count + parseInt(currentRow.qty);
                        }
                    }

                    if (currentRow.headPrep1.includes("3/4\" Dia DPS")) {
                        if (currentRow.handing.includes("DD")) {
                            dps34Count = dps34Count + (parseInt(currentRow.qty) * 2);
                        } else {
                            dps34Count = dps34Count + parseInt(currentRow.qty);
                        }
                    }

                    if (currentRow.headPrep1.includes("PLS-24")) {
                        if (currentRow.handing.includes("DD")) {
                            pls24Count = pls24Count + (parseInt(currentRow.qty) * 2);
                        } else {
                            pls24Count = pls24Count + parseInt(currentRow.qty);
                        }
                    }

                    if (currentRow.headPrep1.includes("PA Closer")) {
                        if (currentRow.handing.includes("DD")) {
                            surfacereinforcementCount = surfacereinforcementCount + (parseInt(currentRow.qty) * 2);
                        } else {
                            surfacereinforcementCount = surfacereinforcementCount + parseInt(currentRow.qty);
                        }
                    }

                    if (currentRow.headPrep1.includes("Reinforcement")) {
                        if (currentRow.handing.includes("DD")) {
                            surfacereinforcementCount = surfacereinforcementCount + (parseInt(currentRow.qty) * 2);
                        } else {
                            surfacereinforcementCount = surfacereinforcementCount + parseInt(currentRow.qty);
                        }
                    }
                }

                if (j === 22) {
                    cell.innerHTML = currentRow.headOpeningDegree;
                }

                if (j === 23) {
                    cell.innerHTML = currentRow.headPrep1Location;
                }

                if (j === 24) {
                    cell.innerHTML = currentRow.prepOnlyActiveDD;
                }

                if (j === 25) {
                    cell.innerHTML = currentRow.headPrep2;
                }

                if (j === 26) {
                    cell.innerHTML = currentRow.headPrep2Location;
                }

                if (j === 27) {
                    cell.innerHTML = currentRow.ept;
                }

                if (j === 28) {
                    cell.innerHTML = currentRow.customEPT;
                }

                if (j === 29) {
                    cell.innerHTML = currentRow.customEPTLoc;
                }

                if (j === 30) {
                    cell.innerHTML = currentRow.unevenDoubleDoors;
                }

                if (j === 31) {
                    cell.innerHTML = currentRow.intermediatePivot;
                }

                if (j === 32) {
                    cell.innerHTML = currentRow.ch1;
                }

                if (j === 33) {
                    cell.innerHTML = currentRow.ch2;
                }

                if (j === 34) {
                    cell.innerHTML = currentRow.ch3;
                }

                if (j === 35) {
                    cell.innerHTML = currentRow.ch4;
                }

                if (j === 36) {
                    cell.innerHTML = currentRow.ch5;
                }

                if (j === 37) {
                    cell.innerHTML = currentRow.ch6;
                }

            }
        }
    }
    ry60CountBox.innerHTML = ry60Count;
    ry80CountBox.innerHTML = ry80Count;
    ry120CountBox.innerHTML = ry120Count;
    soss216CountBox.innerHTML = soss216Count;
    soss218CountBox.innerHTML = soss218Count;
    soss416CountBox.innerHTML = soss416Count;
    soss418CountBox.innerHTML = soss418Count;
    mortise4CountBox.innerHTML = mortise4Count;
    mortise412CountBox.innerHTML = mortise412Count;
    te340CountBox.innerHTML = te340Count;
    te527CountBox.innerHTML = te527Count;
    te540CountBox.innerHTML = te540Count;

    srcCountBox.innerHTML = srcCount;
    srdCountBox.innerHTML = srdCount;
    iscCountBox.innerHTML = iscCount;
    isdCountBox.innerHTML = isdCount;
    ezaCountBox.innerHTML = ezaCount;
    ezcCountBox.innerHTML = ezcCount;
    drcCountBox.innerHTML = drcCount;
    drdCountBox.innerHTML = drdCount;
    cavkitCountBox.innerHTML = cavkitCount;
    fireCountBox.innerHTML = fireCount;

    lcn2030CountBox.innerHTML = lcn2030Count;
    lcn3130CountBox.innerHTML = lcn3130Count;
    abh1000CountBox.innerHTML = abh1000Count;
    abh1000rCountBox.innerHTML = abh1000rCount;
    abh4000CountBox.innerHTML = abh4000Count;
    rixsons1CountBox.innerHTML = rixsonS1Count;
    rixsons2CountBox.innerHTML = rixsonS2Count;
    pivotCountBox.innerHTML = pivotCount;
    rockwoodoh100CountBox.innerHTML = rock100Count;
    rockwoodoh200CountBox.innerHTML = rock200Count;
    rocyorkccCountBox.innerHTML = rocyorkccCount;
    dormaits96CountBox.innerHTML = dormaits96Count;
    gj100CountBox.innerHTML = gj100Count;
    gj400CountBox.innerHTML = gj400Count;
    gj450CountBox.innerHTML = gj450Count;
    cvrCountBox.innerHTML = cvrCount;
    dps1CountBox.innerHTML = dps1Count;
    dps34CountBox.innerHTML = dps34Count;
    pls24CountBox.innerHTML = pls24Count;
    surfacereinforcementCountBox.innerHTML = surfacereinforcementCount;

    nohaCountBox.innerHTML = nohaCount;
    elcCountBox.innerHTML = elcCount;
    hes8300CountBox.innerHTML = hes8300Count;

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