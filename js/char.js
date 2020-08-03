function loadTalent(side, characterID){

    if(side == "offense") charNAME = characterID;
    else if(side == 'defense') charNAME = characterID.slice(0, -1);

    charOBJ = char.find(x => x.NAME === charNAME);
    talentOBJ = talent.find(x => x.NAME === charOBJ.TALENT);
    eChar = document.getElementById(characterID);
    eTalent = document.getElementById(characterID+"TALENT");
    eTalentname = document.getElementById(characterID+"TALENTNAME");
    eTalentdesc = document.getElementById(characterID+"DESC");

    // down shift 50px
    y = eChar.getBoundingClientRect().top + 50;
    // right shift 50px
    x = eChar.getBoundingClientRect().left + 50;

    eTalentname.innerHTML = talentOBJ.NAME;
    eTalentdesc.innerHTML = talentOBJ.DESC;
    eTalent.style.top = y + 'px';
    eTalent.style.left = x + 'px';
};

function getArmy(side){

    if(side == 'defense'){
        eJobNo = combat.defJobNo;
        eChar = combat.defChar;
    }
    else if(side == 'offense'){
        eJobNo = combat.offJobNo;
        eChar = combat.offChar;
    }
    if(eJobNo == 1)      return eChar.ARMY1;
    else if(eJobNo == 2) return eChar.ARMY2;
    else if(eJobNo == 3) return eChar.ARMY3;
    else if(eJobNo == 4) return eChar.ARMY4;
    else if(eJobNo == 5) return eChar.ARMY5;
};

function getTalentSkill(side){
    if(side == 'offense'){
        var talent = combat.offTalent;
        if(talent.ATK != undefined) combat.offATKRATE += talent.ATK;
        if(talent.INT != undefined) combat.offINTRATE += talent.INT;
        if(talent.DEF != undefined) combat.offDEFRATE += talent.DEF;
        if(talent.MDEF != undefined) combat.offMDEFRATE += talent.MDEF;
        if(talent.DEX != undefined) combat.offDEXRATE += talent.DEX;
        if(talent.HEAL != undefined) combat.offHEAL += talent.HEAL;
        if(talent.HEALED != undefined) combat.offHEALED += talent.HEALED;
    }
    else if(side == 'defense'){
        var talent = combat.defTalent;
        if(talent.ATK != undefined) combat.defATKRATE += talent.ATK;
        if(talent.INT != undefined) combat.defINTRATE += talent.INT;
        if(talent.DEF != undefined) combat.defDEFRATE += talent.DEF;
        if(talent.MDEF != undefined) combat.defMDEFRATE += talent.MDEF;
        if(talent.DEX != undefined) combat.defDEXRATE += talent.DEX;
        if(talent.HEAL != undefined) combat.defHEAL += talent.HEAL;
        if(talent.HEALED != undefined) combat.defHEALED += talent.HEALED;
    }
};

function displayArmy(side){
    if(side == 'defense'){
        document.getElementById('defcharARMY').innerHTML = '兵種:' + getArmy(side);
    }
    else if(side == 'offense'){
        document.getElementById('offcharARMY').innerHTML = '兵種:' + getArmy(side);
    }
};

function getJob(side){
    var eJobNo, eChar;
    if(side == 'defense'){
        eJobNo = combat.defJobNo;
        eChar = combat.defChar;
    }
    else if(side == 'offense'){
        eJobNo = combat.offJobNo;
        eChar = combat.offChar;
    }
    if(eJobNo == 1)      return eChar.JOB1;
    else if(eJobNo == 2) return eChar.JOB2;
    else if(eJobNo == 3) return eChar.JOB3;
    else if(eJobNo == 4) return eChar.JOB4;
    else if(eJobNo == 5) return eChar.JOB5;
};

function displayJob(side){
    if(side == 'defense'){
        document.getElementById('defcharJOB').innerHTML = '職業:' + getJob(side);
    }
    else if(side == 'offense'){
        document.getElementById('offcharJOB').innerHTML = '職業:' + getJob(side);
    }
};

function getHeart(side, LV){
    var eJobNo, eChar;
    if(side == 'defense'){
        eJobNo = combat.defJobNo;
        eChar = combat.defChar;
    }
    else if(side == 'offense'){
        eJobNo = combat.offJobNo;
        eChar = combat.offChar;
    }
    if(LV == "LV4"){
        if(eJobNo == 1)      return eChar.JOB1DISCA;
        else if(eJobNo == 2) return eChar.JOB2DISCA;
        else if(eJobNo == 3) return eChar.JOB3DISCA;
        else if(eJobNo == 4) return eChar.JOB4DISCA;
        else if(eJobNo == 5) return eChar.JOB5DISCA;
    }
    else if(LV == "LV7"){
        if(eJobNo == 1)      return eChar.JOB1DISCB;
        else if(eJobNo == 2) return eChar.JOB2DISCB;
        else if(eJobNo == 3) return eChar.JOB3DISCB;
        else if(eJobNo == 4) return eChar.JOB4DISCB;
        else if(eJobNo == 5) return eChar.JOB5DISCB;
    }
};

function displayHeart(side){
    if(side == 'defense'){
        document.getElementById('defHeart1').innerHTML = 'LV4大心:' + getHeart(side, "LV4");
        document.getElementById('defHeart2').innerHTML = 'LV7大心:' + getHeart(side, "LV7");
    }
    else if(side == 'offense'){
        document.getElementById('offHeart1').innerHTML = 'LV4大心:' + getHeart(side, "LV4");
        document.getElementById('offHeart2').innerHTML = 'LV7大心:' + getHeart(side, "LV7");
    }
};

// change JOB and change equipments depends on JOB
function changeJob(side){
    var eJobNo;
    if(side == 'defense'){
        eJobNo = combat.defJobNo + 1;
        if(eJobNo > combat.defChar.JOBS) eJobNo = 1;
        combat.defJobNo = eJobNo;
    }
    else if(side == 'offense'){
        eJobNo = combat.offJobNo + 1;
        if(eJobNo > combat.offChar.JOBS) eJobNo = 1;
        combat.offJobNo = eJobNo;
    }
    // display job when changed
    displayArmy(side);
    displayJob(side);
    displayHeart(side);
    hideWeapon(side);
    displayWeapon(side);
    hideArmor(side);
    displayArmor(side);
    hideHelmet(side);
    displayHelmet(side);
    hideAccessory(side);
    displayAccessory(side);
};

