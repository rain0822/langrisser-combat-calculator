var combat = {
        /* offense character info */
    offParty:undefined, offChar:undefined, offSkill:undefined, offSoldier:undefined,
    offTalent:undefined, offTerrain:undefined, offEnchant:undefined,
    offWeapon:undefined, offArmor:undefined, offHelmet:undefined, offAccessory:undefined,
    offBUFFLIST: [], offDEBUFFLIST: [], offCommandLIST: [], offPassiveLIST: [],
    // character current data
    offFULLHP:undefined, offHP:undefined, offBASEKNOWN:true,
    offBASEATK:undefined, offBASEINT:undefined, offBASEDEF:undefined, offBASEMDEF:undefined, offBASEDEX:undefined,
    offATK:undefined, offINT:undefined, offDEF:undefined, offMDEF:undefined, offDEX:undefined,
    offHITS:undefined, offHEAL:undefined, offHEALED:undefined, range:undefined, run:undefined,
    offCounterRate: undefined, offELSECounterRate:undefined, offTerrainRate: undefined,
    offSoldCounterRate: undefined,
    off1BFriend:undefined, off2BFriend:undefined, off3BFriend:undefined,
    off3BEnemy:undefined, off3CEnemy:undefined, offMOVETYPE:undefined,
    // character arena plus
    offAATK:undefined,offAINT:undefined,offADEF:undefined,offAMDEF:undefined,offADEX:undefined,
    offACRITDMGINC:undefined, offACRITDMGDEC:undefined,
    offACRITRATEINC:undefined, offAPCRITRATEDEC:undefined,
    // equipment selected
    offWeaSel:false, offArmSel:false, offHelSel:false, offAccSel:false,
    // current JobNo
    offJobNo:1,

        /* combat accumulate rates */
    offATKRATE:undefined, offINTRATE:undefined, offDEFRATE:undefined,
    offMDEFRATE:undefined, offDEXRATE:undefined, offDMGTYPE:undefined,
    offCRITDMG:undefined, offCRITRATE:undefined, offDMGRATE:undefined, offSKILLDMG:undefined,
    offDEFNEG:undefined, offMDEFNEG:undefined, offTALENTDMGDEC:undefined,
    offCOMMANDDMGDEC:undefined,
    defATKRATE:undefined, defINTRATE:undefined, defDEFRATE:undefined,
    defMDEFRATE:undefined, defDEXRATE:undefined, defDMGTYPE:undefined,
    defCRITDMG:undefined, defCRITRATE:undefined, defDMGRATE:undefined,
    defDEFNEG:undefined, defMDEFNEG:undefined, defTALENTDMGDEC:undefined,
    defCOMMANDDMGDEC:undefined,
    skillRATE:undefined, combatNEG:undefined, GUARDED: undefined,
        /* soldier accumulate rates */
    offsoldHP:undefined, offsoldFULLHP:undefined, offsoldHPRATE:undefined,
    offsoldATKRATE:undefined, offsoldDEFRATE:undefined, offsoldMDEFRATE:undefined,
    offsoldDMGRATE:undefined, offsoldCRITRATE:undefined, offsoldCRITDMG:undefined,
    offsoldHEALED:undefined, offsoldDMGTYPE:undefined,
    defsoldHP:undefined, defsoldFULLHP:undefined, defsoldHPRATE:undefined,
    defsoldATKRATE:undefined, defsoldDEFRATE:undefined, defsoldMDEFRATE:undefined,
    defsoldDMGRATE:undefined, defsoldCRITRATE:undefined, defsoldCRITDMG:undefined,
    defsoldHEALED:undefined, defsoldDMGTYPE:undefined,

        /* defense character info */
    defParty:undefined, defChar:undefined, defSkill:undefined, defSoldier:undefined,
    defTalent:undefined, defTerrain:undefined, defEnchant:undefined,
    defWeapon:undefined, defArmor:undefined, defHelmet:undefined, defAccessory:undefined,
    defBUFFLIST: [], defDEBUFFLIST: [], defCommandLIST: [], defPassiveLIST: [],
    // character current data
    defFULLHP:undefined, defHP:undefined, defBASEKNOWN:false,
    defBASEATK:undefined, defBASEINT:undefined, defBASEDEF:undefined, defBASEMDEF:undefined, defBASEDEX:undefined,
    defATK:undefined, defINT:undefined, defDEF:undefined, defMDEF:undefined, defDEX:undefined,
    defHITS:undefined, defHEAL:undefined, defHEALED:undefined,
    defCounterRate: undefined, defELSECounterRate:undefined, defTerrainRate: undefined,
    defSoldCounterRate: undefined,
    def1BFriend:undefined, def2BFriend:undefined, def3BFriend:undefined,
    def3BEnemy:undefined, def3CEnemy:undefined, defMOVETYPE:undefined,
    // character arena plus
    defAATK:undefined,defAINT:undefined,defADEF:undefined,defAMDEF:undefined,defADEX:undefined,
    defACRITDMGINC:undefined, defACRITDMGDEC:undefined,
    defACRITRATEINC:undefined, defACRITRATEDEC:undefined,
    // equipment selected
    defWeaSel:false, defArmSel:false, defHelSel:false, defAccSel:false,
    // current JobNo
    defJobNo:1,

        /* reset numbers */
    baseCRITRATE:0, baseCRITDMG:1.3, baseHITS:20, baseRATE:1, baseCombatNEG:0, baseNUM:0,
    baseHPRATE: 1.4,

    offCharChange: false, offSoldChange: false,
    defCharChange: false, defSoldChange: false
};

function resetAllRATE(){
    /* offense accumulative rates */
    combat.offATKRATE = combat.baseRATE;
    combat.offINTRATE = combat.baseRATE;
    combat.offDEFRATE = combat.baseRATE;
    combat.offMDEFRATE = combat.baseRATE;
    combat.offDEXRATE = combat.baseRATE;
    combat.offDMGRATE = combat.baseRATE;
    combat.offCRITDMG = combat.baseCRITDMG;
    combat.offCRITRATE = combat.baseCRITRATE;
    combat.offSKILLDMG = combat.baseRATE;
    combat.offCounterRate = combat.baseRATE;
    combat.offSoldCounterRate = combat.baseRATE;
    combat.offELSECounterRate = combat.baseNUM;
    combat.offTerrainRate = combat.baseRATE;
    combat.offDEFNEG = combat.baseCombatNEG;
    combat.offMDEFNEG = combat.baseCombatNEG;
    combat.offTALENTDMGDEC = combat.baseNUM;
    combat.offCOMMANDDMGDEC = combat.baseNUM;
    /* defense accumulative rates */
    combat.defATKRATE = combat.baseRATE;
    combat.defINTRATE = combat.baseRATE;
    combat.defDEFRATE = combat.baseRATE;
    combat.defMDEFRATE = combat.baseRATE;
    combat.defDEXRATE = combat.baseRATE;
    combat.defDMGRATE = combat.baseRATE;
    combat.defCRITDMG = combat.baseCRITDMG;
    combat.defCRITRATE = combat.baseCRITRATE;
    combat.defCounterRate = combat.baseRATE;
    combat.defSoldCounterRate = combat.baseRATE;
    combat.defELSECounterRate = combat.baseNUM;
    combat.defTerrainRate = combat.baseRATE;
    combat.defDEFNEG = combat.baseCombatNEG;
    combat.defMDEFNEG = combat.baseCombatNEG;
    combat.defTALENTDMGDEC = combat.baseNUM;
    combat.defCOMMANDDMGDEC = combat.baseNUM;
    /* sold rates */
    combat.offsoldHP = 1000;
    combat.offsoldFULLHP = 1000;
    combat.offsoldHPRATE = combat.baseHPRATE;
    combat.offsoldATKRATE = combat.baseRATE;
    combat.offsoldDEFRATE = combat.baseRATE;
    combat.offsoldMDEFRATE = combat.baseRATE;
    combat.offsoldCRITRATE = combat.baseCRITRATE;
    combat.offsoldCRITDMG = combat.baseCRITDMG;
    combat.offsoldDMGRATE = combat.baseRATE;
    combat.offsoldHEALED = combat.baseRATE;
    combat.defsoldHP = 1000;
    combat.defsoldFULLHP = 1000;
    combat.defsoldHPRATE = combat.baseHPRATE;
    combat.defsoldATKRATE = combat.baseRATE;
    combat.defsoldDEFRATE = combat.baseRATE;
    combat.defsoldMDEFRATE = combat.baseRATE;
    combat.defsoldCRITRATE = combat.baseCRITRATE;
    combat.defsoldCRITDMG = combat.baseCRITDMG;
    combat.defsoldDMGRATE = combat.baseRATE;
    combat.defsoldHEALED = combat.baseRATE;
    /* other rates */
    combat.offHITS = combat.baseHITS;
    combat.defHITS = combat.baseHITS;
    combat.offHEAL = combat.baseRATE;
    combat.defHEAL = combat.baseRATE;
    combat.offHEALED = combat.baseRATE;
    combat.defHEALED = combat.baseRATE;
    combat.skillRATE = combat.baseRATE;
    combat.combatNEG = combat.baseRATE;
    combat.GUARDED = false;
};

function createAllList(){
    createSoldierList('offense', 'offSoldierList');
    createSoldierList('defense', 'defSoldierList');
    createCommandList('offense', 'offCommandList');
    createCommandList('defense', 'defCommandList');
    createPassiveList('offense', 'offPassiveList');
    createPassiveList('defense', 'defPassiveList');
    createBUFFList('offense', 'offBUFFList');
    createBUFFList('defense', 'defBUFFList');
    createDEBUFFList('offense', 'offDEBUFFList');
    createDEBUFFList('defense', 'defDEBUFFList');
    createSkillList('offense', 'offSkillList');
    createWeaponList('offense', 'offWeaponList');
    createWeaponList('defense', 'defWeaponList');
    createArmorList('offense', 'offArmorList');
    createArmorList('defense', 'defArmorList');
    createHelmetList('offense', 'offHelmetList');
    createHelmetList('defense', 'defHelmetList');
    createAccessoryList('offense', 'offAccessoryList');
    createAccessoryList('defense', 'defAccessoryList');
};

function loadNUMDesc(side, NUMID){
    if(side == 'offense') SIDE = 'off';
    else if(side == 'defense') SIDE = 'def';

    eNUM = document.getElementById(NUMID);
    eNUMbox = document.getElementById(NUMID+'TABLE');

    // down shift 30px
    y = eNUM.getBoundingClientRect().top + 30;
    // right shift 30px
    x = eNUM.getBoundingClientRect().left + 30;

    eNUMbox.style.top = y + 'px';
    eNUMbox.style.left = x + 'px';
};

function getCharData(side){
    if(side == 'offense'){
        /* 白字 */
        if(!combat.offBASEKNOWN){
            combat.offATK = Number(document.getElementById('offPREATKinput').value);
            combat.offINT = Number(document.getElementById('offPREINTinput').value);
            combat.offDEF = Number(document.getElementById('offPREDEFinput').value);
            combat.offMDEF = Number(document.getElementById('offPREMDEFinput').value);
            combat.offDEX = Number(document.getElementById('offPREDEXinput').value);
        }
        /* 進場綠字 */
        else{
            combat.offBASEATK = Number(document.getElementById('offBASEATKinput').value);
            combat.offBASEINT = Number(document.getElementById('offBASEINTinput').value);
            combat.offBASEDEF = Number(document.getElementById('offBASEDEFinput').value);
            combat.offBASEMDEF = Number(document.getElementById('offBASEMDEFinput').value);
            combat.offBASEDEX = Number(document.getElementById('offBASEDEXinput').value);
        }
        /* 生命/競技精通 */
        combat.offFULLHP = Number(document.getElementById('offHP').value.split('/')[1]);
        combat.offHP = Number(document.getElementById('offHP').value.split('/')[0]);
        combat.offAATK = Number(document.getElementById('offAATK').value);
        combat.offAINT = Number(document.getElementById('offAINT').value);
        combat.offADEF = Number(document.getElementById('offADEF').value);
        combat.offAMDEF = Number(document.getElementById('offAMDEF').value);
        combat.offADEX = Number(document.getElementById('offADEX').value);
        combat.offACRITDMGINC = Number(document.getElementById('offACRITDMGINC').value.split("%")[0]/100);
        combat.offACRITDMGDEC = Number(document.getElementById('offACRITDMGDEC').value.split("%")[0]/100);
        combat.offACRITRATEINC = Number(document.getElementById('offACRITRATEINC').value.split("%")[0]/100);
        combat.offACRITRATEDEC = Number(document.getElementById('offACRITRATEDEC').value.split("%")[0]/100);
        /* 移動/射程/敵軍/友軍/被護衛 */
        combat.range = Number(document.getElementById('offRange').value);
        combat.run = Number(document.getElementById('offRun').value);
        combat.off1BFriend = Number(document.getElementById('off1BFriend').value);
        combat.off2BFriend = Number(document.getElementById('off2BFriend').value);
        combat.off3BFriend = Number(document.getElementById('off3BFriend').value);
        combat.off3BEnemy = Number(document.getElementById('off3BEnemy').value);
        combat.off2CEnemy = Number(document.getElementById('off2CEnemy').value);
        combat.off3CEnemy = Number(document.getElementById('off3CEnemy').value);
        if(document.getElementById('offGUARDED').value == 'true')
            combat.offGUARDED = true;
        else combat.offGUARDED = false;
    }
    else if(side == 'defense'){
        /* 白字 */
        if(!combat.defBASEKNOWN){
            combat.defATK = Number(document.getElementById('defPREATKinput').value);
            combat.defINT = Number(document.getElementById('defPREINTinput').value);
            combat.defDEF = Number(document.getElementById('defPREDEFinput').value);
            combat.defMDEF = Number(document.getElementById('defPREMDEFinput').value);
            combat.defDEX = Number(document.getElementById('defPREDEXinput').value);
        }
        /* 進場綠字 */
        else{
            combat.defBASEATK = Number(document.getElementById('defBASEATKinput').value);
            combat.defBASEINT = Number(document.getElementById('defBASEINTinput').value);
            combat.defBASEDEF = Number(document.getElementById('defBASEDEFinput').value);
            combat.defBASEMDEF = Number(document.getElementById('defBASEMDEFinput').value);
            combat.defBASEDEX = Number(document.getElementById('defBASEDEXinput').value);
        }
        /* 生命/競技精通 */
        combat.defFULLHP = Number(document.getElementById('defHP').value.split('/')[1]);
        combat.defHP = Number(document.getElementById('defHP').value.split('/')[0]);
        combat.defAATK = Number(document.getElementById('defAATK').value);
        combat.defAINT = Number(document.getElementById('defAINT').value);
        combat.defADEF = Number(document.getElementById('defADEF').value);
        combat.defAMDEF = Number(document.getElementById('defAMDEF').value);
        combat.defADEX = Number(document.getElementById('defADEX').value);
        combat.defACRITDMGINC = Number(document.getElementById('defACRITDMGINC').value.split("%")[0]/100);
        combat.defACRITDMGDEC = Number(document.getElementById('defACRITDMGDEC').value.split("%")[0]/100);
        combat.defACRITRATEINC = Number(document.getElementById('defACRITRATEINC').value.split("%")[0]/100);
        combat.defACRITRATEDEC = Number(document.getElementById('defACRITRATEDEC').value.split("%")[0]/100);
        /* 敵軍/友軍 */
        combat.def1BFriend = Number(document.getElementById('def1BFriend').value);
        combat.def2BFriend = Number(document.getElementById('def2BFriend').value);
        combat.def3BFriend = Number(document.getElementById('def3BFriend').value);
        combat.def3BEnemy = Number(document.getElementById('def3BEnemy').value);
        combat.def3CEnemy = Number(document.getElementById('def3CEnemy').value);
    }
};

function getBASENUMS(side){
    if(side == 'offense'){
        combat.offBASEATK=Math.round((combat.offATK-combat.offAATK)/combat.offATKRATE);
        combat.offBASEINT=Math.round((combat.offINT-combat.offAINT)/combat.offINTRATE);
        combat.offBASEDEF=Math.round((combat.offDEF-combat.offADEF)/combat.offDEFRATE);
        combat.offBASEMDEF=Math.round((combat.offMDEF-combat.offAMDEF)/combat.offMDEFRATE);
        combat.offBASEDEX=Math.round((combat.offDEX-combat.offADEX)/combat.offDEXRATE);
    }
    else if(side == 'defense'){
        combat.defBASEATK=Math.round((combat.defATK-combat.defAATK)/combat.defATKRATE);
        combat.defBASEINT=Math.round((combat.defINT-combat.defAINT)/combat.defINTRATE);
        combat.defBASEDEF=Math.round((combat.defDEF-combat.defADEF)/combat.defDEFRATE);
        combat.defBASEMDEF=Math.round((combat.defMDEF-combat.defAMDEF)/combat.defMDEFRATE);
        combat.defBASEDEX=Math.round((combat.defDEX-combat.defADEX)/combat.defDEXRATE);
    }
};

function getPRENUMS(side){
    if(side == 'offense'){
        combat.offATK=Math.round(combat.offBASEATK*combat.offATKRATE+combat.offAATK);
        combat.offINT=Math.round(combat.offBASEINT*combat.offINTRATE+combat.offAINT);
        combat.offDEF=Math.round(combat.offBASEDEF*combat.offDEFRATE+combat.offADEF);
        combat.offMDEF=Math.round(combat.offBASEMDEF*combat.offMDEFRATE+combat.offAMDEF);
        combat.offDEX=Math.round(combat.offBASEDEX*combat.offDEXRATE+combat.offADEX);
    }
    else if(side == 'defense'){
        combat.defATK=Math.round(combat.defBASEATK*combat.defATKRATE+combat.defAATK);
        combat.defINT=Math.round(combat.defBASEINT*combat.defINTRATE+combat.defAINT);
        combat.defDEF=Math.round(combat.defBASEDEF*combat.defDEFRATE+combat.defADEF);
        combat.defMDEF=Math.round(combat.defBASEMDEF*combat.defMDEFRATE+combat.defAMDEF);
        combat.defDEX=Math.round(combat.defBASEDEX*combat.defDEXRATE+combat.defADEX);
    }
};

function displayHEALS(side){
    if(side == 'offense'){
        var HEAL = document.getElementById('offHEAL');
        var HEALED = document.getElementById('offHEALED');
        HEAL.innerHTML = "治療效果:" + Math.round(combat.offHEAL*100) + "%";
        HEALED.innerHTML = "遭受治療效果:" + Math.round(combat.offHEALED*100) + "%";
    }
    else if(side == 'defense'){
        var HEAL = document.getElementById('defHEAL');
        var HEALED = document.getElementById('defHEALED');
        HEAL.innerHTML = "治療效果:" + Math.round(combat.defHEAL*100) + "%";
        HEALED.innerHTML = "遭受治療效果:" + Math.round(combat.defHEALED*100) + "%";
    }
};

/* BASENUM = (PRENUM-ARENA)/(1+EQUIP+TALENT+BUFF+DEBUFF+COMMAND+ENCHANT:MOON) */
function displayBASENUMS(side, sideRate){
    BASE = 'BASE', DATA = 'DATA', DESC = 'DESC';
    NUMS = ['ATK', 'INT', 'DEF', 'MDEF', 'DEX'];
    text = ["白字攻擊", "白字智力", "白字防禦", "白字魔防", "白字技巧"];

    if(side == 'offense'){
        SIDE = 'off'
        pre = [combat.offATK, combat.offINT, combat.offDEF, combat.offMDEF, combat.offDEX];
        arena = [combat.offAATK, combat.offAINT, combat.offADEF, combat.offAMDEF, combat.offADEX];
        rate = [combat.offATKRATE, combat.offINTRATE, combat.offDEFRATE, combat.offMDEFRATE, combat.offDEXRATE];
    }
    else if(side == 'defense'){
        SIDE = 'def';
        pre = [combat.defATK, combat.defINT, combat.defDEF, combat.defMDEF, combat.defDEX];
        arena = [combat.defAATK, combat.defAINT, combat.defADEF, combat.defAMDEF, combat.defADEX];
        rate = [combat.defATKRATE, combat.defINTRATE, combat.defDEFRATE, combat.defMDEFRATE, combat.defDEXRATE];
    }

    for(let i=0; i<NUMS.length; i++){
        let eDATA = document.getElementById(SIDE+BASE+NUMS[i]+DATA);
        let ePREDESC = document.getElementById(SIDE+PRE+NUMS[i]+DESC);
        let eBASEDESC = document.getElementById(SIDE+BASE+NUMS[i]+DESC);
        let number = (pre[i]-arena[i])/rate[i];
        eDATA.innerHTML = text[i] + ":" + Math.round(number);
        ePREDESC.innerHTML = Math.round(pre[i]);
        eBASEDESC.innerHTML = Math.round(number) + "=(" + pre[i] + "-" + arena[i] + ")÷(1";
        for(let j=0; j<sideRate.length; j++){
            if(sideRate[j].SOLDONLY) continue;
            if(sideRate[j].RATE[i] > 0)
               eBASEDESC.innerHTML+="+"+sideRate[j].RATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
            if(sideRate[j].RATE[i] < 0)
               eBASEDESC.innerHTML+=sideRate[j].RATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
        }
        eBASEDESC.innerHTML += ")";
    }
};

/* PRENUM = BASENUM*(1+EQUIP+TALENT+BUFF+DEBUFF+COMMAND+ENCHANT:MOON)+ARENA */
function displayPRENUMS(side, sideRate){
    BASE = 'BASE', PRE = 'PRE', DATA = 'DATA', DESC = 'DESC';
    NUMS = ['ATK', 'INT', 'DEF', 'MDEF', 'DEX'];
    text = ["當前攻擊", "當前智力", "當前防禦", "當前魔防", "當前技巧"];

    if(side == 'offense'){
        SIDE = 'off';
        base = [combat.offBASEATK, combat.offBASEINT, combat.offBASEDEF, combat.offBASEMDEF, combat.offBASEDEX];
        arena = [combat.offAATK, combat.offAINT, combat.offADEF, combat.offAMDEF, combat.offADEX];
        rate = [combat.offATKRATE, combat.offINTRATE, combat.offDEFRATE, combat.offMDEFRATE, combat.offDEXRATE];
    }
    else if(side == 'defense'){
        SIDE = 'def';
        base = [combat.defBASEATK, combat.defBASEINT, combat.defBASEDEF, combat.defBASEMDEF, combat.defBASEDEX];
        arena = [combat.defAATK, combat.defAINT, combat.defADEF, combat.defAMDEF, combat.defADEX];
        rate = [combat.defATKRATE, combat.defINTRATE, combat.defDEFRATE, combat.defMDEFRATE, combat.defDEXRATE];
    }

    for(let i=0; i<NUMS.length; i++){
        let eDATA = document.getElementById(SIDE+PRE+NUMS[i]+DATA);
        let ePREDESC = document.getElementById(SIDE+PRE+NUMS[i]+DESC);
        let eBASEDESC = document.getElementById(SIDE+BASE+NUMS[i]+DESC);
        let number = base[i]*rate[i]+arena[i];
        eDATA.innerHTML = text[i] + ":" + Math.round(number);
        eBASEDESC.innerHTML = Math.round(base[i]);
        ePREDESC.innerHTML = Math.round(number) + "=" + base[i] + "×(1";
        for(let j=0; j<sideRate.length; j++){
            if(sideRate[j].SOLDONLY) continue;
            if(sideRate[j].RATE[i] > 0)
                ePREDESC.innerHTML+="+"+sideRate[j].RATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
            if(sideRate[j].RATE[i] < 0)
                ePREDESC.innerHTML+=sideRate[j].RATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
        }
        ePREDESC.innerHTML += ")+" + arena[i];
    }
};

/* NUMBER INTERACTION (SUBSTITUTION AND ADDITION) */
function displayINTERACT(side, interact){
    PRE = 'PRE', DATA = 'DATA', DESC = 'DESC', NUMS = ['ATK', 'INT', 'DEF', 'MDEF'];
    TARGET = [0, 0, 0, 0], NULLED = [false, false, false, false];
    text = ["當前攻擊", "當前智力", "當前防禦", "當前魔防"];

    if(side == 'offense'){
        SIDE = 'off';
        pre = [combat.offATK, combat.offINT, combat.offDEF, combat.offMDEF, combat.offDEX];
    }
    else if(side == 'defense'){
        SIDE = 'def';
        pre = [combat.defATK, combat.defINT, combat.defDEF, combat.defMDEF, combat.defDEX];
    }

    /* SUB */
    let subs = [0, 0, 0, 0];
    for(let i=0; i<interact.length; i++){
        if(!interact[i].SUBEXIST) continue;
        var base1 = false, base2 = false, target = false;
        for(let j=0; j<NUMS.length; j++){
            // get changing target
            if(interact[i].SUB[j] != 1 && interact[i].SUB[j] != 0) target = j;
            // get changing base (up to 2 for 神衛)
            if(!base1 && interact[i].SUB[j] == 1) base1 = j;
            else if(base1 && interact[i].SUB[j] == 1) base2 = j;
        }
        eTARGETDATA = document.getElementById(SIDE+PRE+NUMS[target]+DATA);
        eTARGETDESC = document.getElementById(SIDE+PRE+NUMS[target]+DESC);
        // reset target desc
        if(subs[target] == 0){
            eTARGETDATA.innerHTML = text[target]+":";
            eTARGETDESC.innerHTML = "";
        }
        else eTARGETDESC.innerHTML += "+";
        subs[target] += 1;

        if(base2){
            base1NUM = pre[base1];
            base2NUM = pre[base2];
            // if a SUBBED number be used as a base, the base's target will be set to 0
            NULLED[base1] = true, NULLED[base2] = true;
            eTARGETDESC.innerHTML += "("+base1NUM.toFixed(2)+"×"+interact[i].SUB[base1]+"+"+base2NUM.toFixed(2)+"×"+interact[i].SUB[base2]+")["+interact[i].NAME+"]";
            TARGET[target] += base1NUM*interact[i].SUB[base1]+base2NUM*interact[i].SUB[base2];
        }
        else{
            base1NUM = pre[base1];
            // if a SUBBED number be used as a base, the base's target will be set to 0
            NULLED[base1] = true;
            eTARGETDESC.innerHTML += "("+base1NUM.toFixed(2)+"×"+interact[i].SUB[target]+")["+interact[i].NAME+"]";
            TARGET[target] += base1NUM*interact[i].SUB[target];
        }
    }
    // display the summed sub targets
    for(let i=0; i<NUMS.length; i++)
        if(TARGET[i] != 0){
            eDATA = document.getElementById(SIDE+PRE+NUMS[i]+DATA);
            eDESC = document.getElementById(SIDE+PRE+NUMS[i]+DESC);
            if(!NULLED[i]){
                eDATA.innerHTML += TARGET[i].toFixed(2);
                eDESC.innerHTML = TARGET[i].toFixed(2)+"="+eDESC.innerHTML;
            }
            else{
                eDATA.innerHTML += "0.00";
                eDESC.innerHTML = "0.00=0.00[代替後的數值無法被代替]";
            }
        }

    /* ADD */
    let ADDS = [0, 0, 0, 0];
    for(let i=0; i<interact.length; i++){
        if(!interact[i].ADDEXIST) continue;
        var base1 = false, base2 = false, target1 = false, target2 = false;
        for(let j=0; j<NUMS.length; j++){
            // get changing target (up to 2 for 團結的意志)
            if(!target1 && interact[i].ADD[j] == 1) target1 = j;
            else if(target1 && interact[i].ADD[j] == 1) target2 = j;
            // get changing base (up to 2 for 野獸震懾)
            if(!base1 && interact[i].ADD[j] != 1 && interact[i].ADD[j] != 0) base1 = j;
            else if(base1 && interact[i].ADD[j] != 1 && interact[i].ADD[j] != 0) base2 = j;
        }
        eTARGETDATA = document.getElementById(SIDE+PRE+NUMS[target1]+DATA);
        eTARGETDESC = document.getElementById(SIDE+PRE+NUMS[target1]+DESC);
        // append on current target desc

        if(base2){
            base1NUM = pre[base1];
            base2NUM = pre[base2];
            eTARGETDESC.innerHTML += "+("+base1NUM.toFixed(2)+"×"+interact[i].ADD[base1]+"+"+base2NUM.toFixed(2)+"×"+interact[i].ADD[base2]+")["+interact[i].NAME+"]";
            ADDS[target1] += base1NUM*interact[i].ADD[base1]+base2NUM*interact[i].ADD[base2];
        }
        else if(target2){
            base1NUM = pre[base1];
            eTARGET1DESC = document.getElementById(SIDE+PRE+NUMS[target1]+DESC);
            eTARGET2DESC = document.getElementById(SIDE+PRE+NUMS[target2]+DESC);
            eTARGET1DESC.innerHTML += "+("+base1NUM.toFixed(2)+"×"+interact[i].ADD[base1]+")["+interact[i].NAME+"]";
            eTARGET2DESC.innerHTML += "+("+base1NUM.toFixed(2)+"×"+interact[i].ADD[base1]+")["+interact[i].NAME+"]";
            ADDS[target1] += base1NUM*interact[i].ADD[base1];
            ADDS[target2] += base1NUM*interact[i].ADD[base1];
        }
        else{
            base1NUM = pre[base1];
            eTARGETDESC.innerHTML += "+("+base1NUM.toFixed(2)+"×"+interact[i].ADD[base1]+")["+interact[i].NAME+"]";
            ADDS[target1] += base1NUM*interact[i].ADD[base1];
        }
    }
    // display adds
    for(let i=0; i<NUMS.length; i++)
        if(ADDS[i] != 0){
            eDATA = document.getElementById(SIDE+PRE+NUMS[i]+DATA);
            eDESC = document.getElementById(SIDE+PRE+NUMS[i]+DESC);
            numAfterAdd = ADDS[i] + Number(eDATA.innerHTML.split(':')[1]);
            eDATA.innerHTML = text[i]+":"+numAfterAdd.toFixed(2);
            eDESC.innerHTML = numAfterAdd.toFixed(2)+"="+eDESC.innerHTML.split('=')[1];
        }
};

/* MIDNUM = PRENUM+BASENUM*(0+EQUIP+TALENT+ENCHANT) */
function displayMIDNUMS(side, sideRate, oppRate){
    BASE = 'BASE', PRE = 'PRE', MID = 'MID', DATA = 'DATA', DESC = 'DESC';
    NUMS = ['ATK', 'INT', 'DEF', 'MDEF', 'DEX', 'CRITRATE', 'CRITDMG'];
    text = ["戰中攻擊", "戰中智力", "戰中防禦", "戰中魔防", "戰中技巧", "暴擊率", "暴擊傷害"];

    offBASE = [combat.offBASEATK, combat.offBASEINT, combat.offBASEDEF, combat.offBASEMDEF, combat.offBASEDEX];
    offPRE = [combat.offATK, combat.offINT, combat.offDEF, combat.offMDEF, combat.offDEX];
    offRATE = [combat.offATKRATE, combat.offINTRATE, combat.offDEFRATE, combat.offMDEFRATE, combat.offDEXRATE, combat.offCRITRATE, combat.offCRITDMG];
    offARENA = [combat.offAATK, combat.offAINT, combat.offADEF, combat.offAMDEF, combat.offADEX, combat.offACRITRATEINC-combat.defACRITRATEDEC, combat.offACRITDMGINC-combat.defACRITDMGDEC];
    defBASE = [combat.defBASEATK, combat.defBASEINT, combat.defBASEDEF, combat.defBASEMDEF, combat.defBASEDEX];
    defPRE = [combat.defATK, combat.defINT, combat.defDEF, combat.defMDEF, combat.defDEX];
    defRATE = [combat.defATKRATE, combat.defINTRATE, combat.defDEFRATE, combat.defMDEFRATE, combat.defDEXRATE, combat.defCRITRATE, combat.defCRITDMG];
    defARENA = [combat.defAATK, combat.defAINT, combat.defADEF, combat.defAMDEF, combat.defADEX, combat.defACRITRATEINC-combat.offACRITRATEDEC, combat.defACRITDMGINC-combat.offACRITDMGDEC];

    if(side == 'offense'){
        SIDE = 'off';
        base = offBASE, oppbase = defBASE;
        pre = offPRE, opppre = defPRE;
        rate = offRATE, arena = offARENA;
    }
    else if(side == 'defense'){
        SIDE = 'def';
        base = defBASE, oppbase = offBASE;
        pre = defPRE, opppre = offPRE;
        rate = defRATE, arena = defARENA;
    }

    for(let i=0; i<NUMS.length; i++){
        let eDATA = document.getElementById(SIDE+MID+NUMS[i]+DATA);
        let eMIDDESC = document.getElementById(SIDE+MID+NUMS[i]+DESC);

        if(i < 5){
            /* MIDNUM FORMULA */
            let number = base[i]*rate[i]+arena[i];
            if(side == 'offense') combat.offCRITRATE = number.toFixed(2);
            if(side == 'defense') combat.defCRITRATE = number.toFixed(2);

            eDATA.innerHTML = text[i] + ":" + Math.round(number);
            eMIDDESC.innerHTML = Math.round(number)+"="+pre[i]+"+"+base[i]+"×(0";
            for(let j=0; j<sideRate.length; j++){
                if(sideRate[j].SOLDONLY) continue;
                if(sideRate[j].MIDRATE[i] > 0)
                    eMIDDESC.innerHTML+="+"+sideRate[j].MIDRATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
                if(sideRate[j].MIDRATE[i] < 0)
                    eMIDDESC.innerHTML+=sideRate[j].MIDRATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
            }
            eMIDDESC.innerHTML += ")";
        }
        else{
            let number = rate[i]+arena[i];
            if(side == 'offense') combat.offCRITDMG = number.toFixed(2);
            if(side == 'defense') combat.defCRITDMG = number.toFixed(2);

            eDATA.innerHTML = text[i] + ":" + number.toFixed(2);
            eMIDDESC.innerHTML = number.toFixed(2);
            /* CRITRATE */
            if(i == 5){
                ePREDEXDATA = document.getElementById(SIDE+MID+'DEX'+DATA);
                PREDEX = Number(ePREDEXDATA.innerHTML.split(":")[1]).toFixed(0);
                baseCRIT = PREDEX/1000;
                eDATA.innerHTML = text[i] + ":" + (baseCRIT+number).toFixed(2);
                if(arena[i] >= 0) eMIDDESC.innerHTML = (baseCRIT+number).toFixed(2)+"="+baseCRIT.toFixed(2)+"[技巧]+"+arena[i]+"[競技精通]";
                else eMIDDESC.innerHTML = (baseCRIT+number).toFixed(2)+"="+baseCRIT.toFixed(2)+"[技巧]"+arena[i].toFixed(2)+"[競技精通]";
            }
            /* CRITDMG */
            if(i == 6) eMIDDESC.innerHTML = number.toFixed(2)+"="+combat.baseCRITDMG+"+"+arena[i].toFixed(2)+"[競技精通]";
            for(let j=0; j<sideRate.length; j++){
                if(sideRate[j].SOLDONLY) continue;
                if(sideRate[j].MIDRATE[i] > 0)
                    eMIDDESC.innerHTML+="+"+sideRate[j].MIDRATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
                if(sideRate[j].MIDRATE[i] < 0)
                    eMIDDESC.innerHTML+=sideRate[j].MIDRATE[i].toFixed(2)+"["+sideRate[j].NAME+"]";
            }
            for(let j=0; j<oppRate.length; j++){
                if(oppRate[j].SOLDONLY) continue;
                if(oppRate[j].MIDRATE[i+3] > 0)
                    eMIDDESC.innerHTML+="-"+oppRate[j].MIDRATE[i+3].toFixed(2)+"["+oppRate[j].NAME+"]";
                if(oppRate[j].MIDRATE[i+3] < 0)
                    eMIDDESC.innerHTML+="+"+(oppRate[j].MIDRATE[i+3].toFixed(2)*-1)+"["+oppRate[j].NAME+"]";
            }
        }
    }
};

/* NUMBER INTERACTION (SUBSTITUTION AND ADDITION) */
function displayMIDINTERACT(side, interact){
    MID = 'MID', DATA = 'DATA', DESC = 'DESC', NUMS = ['ATK', 'INT', 'DEF', 'MDEF'];
    TARGET = [0, 0, 0, 0], NULLED = [false, false, false, false];
    text = ["戰中攻擊", "戰中智力", "戰中防禦", "戰中魔防"];

    if(side == 'offense'){
        SIDE = 'off';
        mid = [combat.offBASEATK * combat.offATKRATE + combat.offAATK,
               combat.offBASEINT * combat.offINTRATE + combat.offAINT,
               combat.offBASEDEF * combat.offDEFRATE + combat.offADEF,
               combat.offBASEMDEF* combat.offMDEFRATE+ combat.offAMDEF,
               combat.offBASEDEX * combat.offDEXRATE + combat.offADEX];
    }
    else if(side == 'defense'){
        SIDE = 'def';
        mid = [combat.defBASEATK * combat.defATKRATE + combat.defAATK,
               combat.defBASEINT * combat.defINTRATE + combat.defAINT,
               combat.defBASEDEF * combat.defDEFRATE + combat.defADEF,
               combat.defBASEMDEF* combat.defMDEFRATE+ combat.defAMDEF,
               combat.defBASEDEX * combat.defDEXRATE + combat.defADEX];
    }

    /* SUB */
    let subs = [0, 0, 0, 0];
    for(let i=0; i<interact.length; i++){
        if(!interact[i].MIDSUBEXIST) continue;
        var base1 = false, base2 = false, target = false;
        for(let j=0; j<NUMS.length; j++){
            // get changing target
            if(interact[i].MIDSUB[j] != 1 && interact[i].MIDSUB[j] != 0) target = j;
            // get changing base (up to 2 for 神衛)
            if(!base1 && interact[i].MIDSUB[j] == 1) base1 = j;
            else if(base1 && interact[i].MIDSUB[j] == 1) base2 = j;
        }
        eTARGETDATA = document.getElementById(SIDE+MID+NUMS[target]+DATA);
        eTARGETDESC = document.getElementById(SIDE+MID+NUMS[target]+DESC);
        // reset target desc
        if(subs[target] == 0){
            eTARGETDATA.innerHTML = text[target]+":";
            eTARGETDESC.innerHTML = "";
        }
        else eTARGETDESC.innerHTML += "+";
        subs[target] += 1;

        if(base2){
            base1NUM = mid[base1];
            base2NUM = mid[base2];
            // if a SUBBED number be used as a base, the base's target will be set to 0
            NULLED[base1] = true, NULLED[base2] = true;
            eTARGETDESC.innerHTML += "("+base1NUM.toFixed(2)+"×"+interact[i].MIDSUB[base1]+"+"+base2NUM.toFixed(2)+"×"+interact[i].MIDSUB[base2]+")["+interact[i].NAME+"]";
            TARGET[target] += base1NUM*interact[i].MIDSUB[base1]+base2NUM*interact[i].MIDSUB[base2];
        }
        else{
            base1NUM = mid[base1];
            // if a SUBBED number be used as a base, the base's target will be set to 0
            NULLED[base1] = true;
            eTARGETDESC.innerHTML += "("+base1NUM.toFixed(2)+"×"+interact[i].MIDSUB[target]+")["+interact[i].NAME+"]";
            TARGET[target] += base1NUM*interact[i].MIDSUB[target];
        }
    }
    // display the summed sub targets
    for(let i=0; i<NUMS.length; i++)
        if(TARGET[i] != 0){
            eDATA = document.getElementById(SIDE+MID+NUMS[i]+DATA);
            eDESC = document.getElementById(SIDE+MID+NUMS[i]+DESC);
            if(!NULLED[i]){
                eDATA.innerHTML += TARGET[i].toFixed(2);
                eDESC.innerHTML = TARGET[i].toFixed(2)+"="+eDESC.innerHTML;
            }
            else{
                eDATA.innerHTML += "0.00";
                eDESC.innerHTML = "0.00=0.00[代替後的數值無法被代替]";
            }
        }

    /* ADD */
    let ADDS = [0, 0, 0, 0];
    for(let i=0; i<interact.length; i++){
        if(!interact[i].MIDADDEXIST) continue;
        var base1 = false, base2 = false, target1 = false, target2 = false;
        for(let j=0; j<NUMS.length; j++){
            // get changing target (up to 2 for 團結的意志)
            if(!target1 && interact[i].MIDADD[j] == 1) target1 = j;
            else if(target1 && interact[i].MIDADD[j] == 1) target2 = j;
            // get changing base (up to 2 for 野獸震懾)
            if(!base1 && interact[i].MIDADD[j] != 1 && interact[i].MIDADD[j] != 0) base1 = j;
            else if(base1 && interact[i].MIDADD[j] != 1 && interact[i].MIDADD[j] != 0) base2 = j;
        }
        eTARGETDATA = document.getElementById(SIDE+MID+NUMS[target1]+DATA);
        eTARGETDESC = document.getElementById(SIDE+MID+NUMS[target1]+DESC);
        // append on current target desc

        if(base2){
            base1NUM = mid[base1];
            base2NUM = mid[base2];
            eTARGETDESC.innerHTML += "+("+base1NUM.toFixed(2)+"×"+interact[i].MIDADD[base1]+"+"+base2NUM.toFixed(2)+"×"+interact[i].MIDADD[base2]+")["+interact[i].NAME+"]";
            ADDS[target1] += base1NUM*interact[i].MIDADD[base1]+base2NUM*interact[i].MIDADD[base2];
        }
        else if(target2){
            base1NUM = mid[base1];
            eTARGET1DESC = document.getElementById(SIDE+MID+NUMS[target1]+DESC);
            eTARGET2DESC = document.getElementById(SIDE+MID+NUMS[target2]+DESC);
            eTARGET1DESC.innerHTML += "+("+base1NUM.toFixed(2)+"×"+interact[i].MIDADD[base1]+")["+interact[i].NAME+"]";
            eTARGET2DESC.innerHTML += "+("+base1NUM.toFixed(2)+"×"+interact[i].MIDADD[base1]+")["+interact[i].NAME+"]";
            ADDS[target1] += base1NUM*interact[i].MIDADD[base1];
            ADDS[target2] += base1NUM*interact[i].MIDADD[base1];
        }
        else{
            base1NUM = mid[base1];
            eTARGETDESC.innerHTML += "+("+base1NUM.toFixed(2)+"×"+interact[i].MIDADD[base1]+")["+interact[i].NAME+"]";
            ADDS[target1] += base1NUM*interact[i].MIDADD[base1];
        }
    }
    // display adds
    for(let i=0; i<NUMS.length; i++)
        if(ADDS[i] != 0){
            eDATA = document.getElementById(SIDE+MID+NUMS[i]+DATA);
            eDESC = document.getElementById(SIDE+MID+NUMS[i]+DESC);
            numAfterAdd = ADDS[i] + Number(eDATA.innerHTML.split(':')[1]);
            eDATA.innerHTML = text[i]+":"+numAfterAdd.toFixed(2);
            eDESC.innerHTML = numAfterAdd.toFixed(2)+"="+eDESC.innerHTML.split('=')[1];
        }
};

function displayONEHIT(side, sideRate, oppRate, crit){
    ONEHIT='ONEHIT', MID='MID', DATA='DATA', DESC='DESC', DMGTYPE='DMGTYPE', text=['一段傷害'];
    NUMS = ['ATK', 'INT', 'DEF', 'MDEF', 'DEX', 'CRITDMG'];
    ATK = 0, INT = 1, DEF = 2, MDEF = 3, DEX = 4, CRITDMG = 5, DMGRATE = 2;
    CRITRATEINC = 5, CRITDMGINC = 6, DMGRATEINC = 7;
    CRITRATEDEC = 8, CRITDMGDEC = 9, DMGRATEDEC = 10;
    offMID = [], defMID = [],
    offOTHER = [combat.offCRITRATE, combat.offCRITDMG, combat.offDMGRATE];
    defOTHER = [combat.defCRITRATE, combat.defCRITDMG, combat.defDMGRATE];

    // ONEHIT <-> ONECRIT
    if(crit) ONEHIT = 'ONECRIT', text[0] = '一段暴擊';
    else ONEHIT = 'ONEHIT', text[0] = '一段傷害';

    // get MIDNUMS
    for(let i=0; i<NUMS.length; i++){
        eoffDATA = document.getElementById('off'+MID+NUMS[i]+DATA);
        edefDATA = document.getElementById('def'+MID+NUMS[i]+DATA);
        offMID[i] = Number(eoffDATA.innerHTML.split(':')[1]);
        defMID[i] = Number(edefDATA.innerHTML.split(':')[1]);
    }

    if(side == 'offense'){
        SIDE = 'off';
        skilltype = combat.offSkill.TYPE;
        skillrate = combat.offSkill.RATE;
        skilldmg = combat.offSKILLDMG;
        DEFNEG = combat.offDEFNEG;
        MDEFNEG = combat.offMDEFNEG;
        otherside = 'defense';
        mid = offMID, oppmid = defMID;
        other = offOTHER, oppother = defOTHER;
        counterRate = combat.offCounterRate;
        terrainRate = combat.defTerrainRate;
        talentDMGDEC = combat.defTALENTDMGDEC;
        commandDMGDEC = combat.defCOMMANDDMGDEC;
    }
    else if(side == 'defense'){
        SIDE = 'def';
        skilltype = combat.defSkill.TYPE;
        skillrate = combat.defSkill.RATE;
        skilldmg = 1;
        DEFNEG = combat.defDEFNEG;
        MDEFNEG = combat.defMDEFNEG;
        otherside = 'offense';
        mid = defMID, oppmid = offMID;
        other = defOTHER, oppother = offOTHER;
        counterRate = combat.defCounterRate;
        terrainRate = combat.offTerrainRate;
        talentDMGDEC = combat.offTALENTDMGDEC;
        commandDMGDEC = combat.offCOMMANDDMGDEC;
    }

    if(skilltype == '物理傷害'){
        offNUM = mid[ATK]*counterRate;
        defNUM = oppmid[DEF]*terrainRate;
        negNUM = DEFNEG;
    }
    else if(skilltype == '魔法傷害'){
        offNUM = mid[INT]*counterRate;
        defNUM = oppmid[MDEF]*terrainRate;
        negNUM = MDEFNEG;
    }

    /* ONEHIT MAIN FORMULA */
    number = (offNUM-defNUM*(1-negNUM))/2*skillrate*other[DMGRATE]*skilldmg*(1-talentDMGDEC)*(1-commandDMGDEC);
    /* ONECRIT MAIN FORMULA */
    if(crit) number = (offNUM-defNUM*(1-negNUM))/2*skillrate*other[DMGRATE]*skilldmg*(1-talentDMGDEC)*(1-commandDMGDEC)*mid[CRITDMG];
    // min dmg = 1
    if(number <= 0) number = 1;

    eTYPE = document.getElementById(SIDE+DMGTYPE);
    eDATA = document.getElementById(SIDE+ONEHIT+DATA);
    eDESC = document.getElementById(SIDE+ONEHIT+DESC);
    eTYPE.innerHTML = "["+skilltype+"]";
    eDATA.innerHTML = text[0] + ":" + Math.round(number);
    eDESC.innerHTML = Math.round(number) + "=";

    /* display skilltype */
    if(skilltype == '物理傷害') offNUM = ATK, defNUM = DEF;
    else if(skilltype == '魔法傷害') offNUM = INT, defNUM = MDEF;


    /* offNUM*counterRate */
    eDESC.innerHTML += "("+Math.round(mid[offNUM])+"×"+counterRate.toFixed(2);
    /* defNUM*(1-negNUM)*terrainRate */
    if(!negNUM) eDESC.innerHTML += " - "+Math.round(oppmid[defNUM])+"×"+terrainRate+")";
    else eDESC.innerHTML += " - "+Math.round(oppmid[defNUM])+"×(1-"+negNUM+")×"+terrainRate+")";
    /* skillrate */
    eDESC.innerHTML += "÷2×"+skillrate;
    /* off DMGRATEINC */
    eDESC.innerHTML += "×(1";
    for(let j=0; j<sideRate.length; j++){
      if(sideRate[j].SOLDONLY != undefined && sideRate[j].SOLDONLY == true) continue;
      if(sideRate[j].MIDRATE[DMGRATEINC] > 0)
       eDESC.innerHTML+="+"+sideRate[j].MIDRATE[DMGRATEINC].toFixed(2)+"["+sideRate[j].NAME+"]";
      if(sideRate[j].MIDRATE[DMGRATEINC] < 0)
       eDESC.innerHTML+=sideRate[j].MIDRATE[DMGRATEINC].toFixed(2)+"["+sideRate[j].NAME+"]";
    }
    /* def DMGRATEDEC */
    for(let j=0; j<oppRate.length; j++){
      if(oppRate[j].SOLDONLY != undefined && oppRate[j].SOLDONLY == true) continue;
      if(oppRate[j].MIDRATE[DMGRATEDEC] > 0)
       eDESC.innerHTML+="-"+oppRate[j].MIDRATE[DMGRATEDEC].toFixed(2)+"["+oppRate[j].NAME+"]";
      if(oppRate[j].MIDRATE[DMGRATEDEC] < 0)
       eDESC.innerHTML+="+"+(oppRate[j].MIDRATE[DMGRATEDEC].toFixed(2)*-1)+"["+oppRate[j].NAME+"]";
    }
    eDESC.innerHTML += ")";

    /* skill dmg rate */
    if(skilldmg != 1){
        eDESC.innerHTML += "×(1";
        for(let j=0; j<sideRate.length; j++)
            if(sideRate[j].SKILLDMG != undefined && sideRate[j].SKILLDMG != 0)
                eDESC.innerHTML+="+"+sideRate[j].SKILLDMG.toFixed(2)+"["+sideRate[j].NAME+"]";
        eDESC.innerHTML += ")";
    }

    /* mulitply talent DMGDEC */
    if(talentDMGDEC != 0){
        eDESC.innerHTML += "×(1";
        for(let j=0; j<oppRate.length; j++)
            if(oppRate[j].TALENTDMGDEC != undefined && oppRate[j].TALENTDMGDEC != 0)
               eDESC.innerHTML+="-"+oppRate[j].TALENTDMGDEC.toFixed(2)+"["+oppRate[j].NAME+"]";
        eDESC.innerHTML += ")";
    }

    /* mulitply command DMGDEC */
    if(commandDMGDEC != 0){
        eDESC.innerHTML += "×(1";
        for(let j=0; j<oppRate.length; j++)
            if(oppRate[j].COMMANDDMGDEC != undefined && oppRate[j].COMMANDDMGDEC != 0)
               eDESC.innerHTML+="-"+oppRate[j].COMMANDDMGDEC.toFixed(2)+"["+oppRate[j].NAME+"]";
        eDESC.innerHTML += ")";
    }

    /* CRIT */
    if(crit) eDESC.innerHTML += "×"+mid[CRITDMG];
};

function displayAOE(side, sideRate, oppRate, crit){
    AOE='AOE', PRE='PRE', DATA='DATA', DESC='DESC', text=['造成傷害'];
    NUMS = ['ATK', 'INT', 'DEF', 'MDEF', 'DEX'];
    ATK = 0, INT = 1, DEF = 2, MDEF = 3, DEX = 4, CRITDMG = 5, DMGRATE = 2;
    CRITRATEINC = 5, CRITDMGINC = 6, DMGRATEINC = 7;
    CRITRATEDEC = 8, CRITDMGDEC = 9, DMGRATEDEC = 10;
    offPRE = [combat.offATK, combat.offINT, combat.offDEF, combat.offMDEF, combat.offDEX];
    defPRE = [combat.defATK, combat.defINT, combat.defDEF, combat.defMDEF, combat.defDEX];
    offOTHER = [combat.offCRITRATE, combat.offCRITDMG, combat.offDMGRATE];
    defOTHER = [combat.defCRITRATE, combat.defCRITDMG, combat.defDMGRATE];

    // AOE <->AOECRIT
    if(crit) AOE = 'AOECRIT', text[0] = '造成暴擊';
    else AOE = 'AOE', text[0] = '造成傷害';

    if(side == 'offense'){
        SIDE = 'off';
        skilltype = combat.offSkill.TYPE;
        skillrate = combat.offSkill.RATE;
        skilldmg = combat.offSKILLDMG;
        DEFNEG = combat.offDEFNEG;
        MDEFNEG = combat.offMDEFNEG;
        otherside = 'defense';
        pre = offPRE, opppre = defPRE;
        other = offOTHER, oppother = defOTHER;
        counterRate = combat.offCounterRate;
        terrainRate = combat.defTerrainRate;
        talentDMGDEC = combat.defTALENTDMGDEC;
        commandDMGDEC = combat.defCOMMANDDMGDEC;
        critdmg = combat.offCRITDMG;
    }

    if(skilltype == '物理傷害'){
        offNUM = pre[ATK]*counterRate;
        defNUM = opppre[DEF]*terrainRate;
        negNUM = DEFNEG;
    }
    else if(skilltype == '魔法傷害'){
        offNUM = pre[INT]*counterRate;
        defNUM = opppre[MDEF]*terrainRate;
        negNUM = MDEFNEG;
    }

    /* AOE MAIN FORMULA */
    number = (offNUM-defNUM*(1-negNUM))/2*skillrate*20*other[DMGRATE]*skilldmg*(1-talentDMGDEC)*(1-commandDMGDEC);
    /* AOECRIT MAIN FORMULA */
    if(crit) number = (offNUM-defNUM*(1-negNUM))/2*skillrate*20*other[DMGRATE]*skilldmg*(1-talentDMGDEC)*(1-commandDMGDEC)*critdmg;
    // min dmg = 1
    if(number <= 0) number = 1;

    eTYPE = document.getElementById(SIDE+AOE+DMGTYPE);
    eDATA = document.getElementById(SIDE+AOE+DATA);
    eDESC = document.getElementById(SIDE+AOE+DESC);
    eTYPE.innerHTML = "["+skilltype+"]";
    eDATA.innerHTML = text[0] + ":" + Math.round(number);
    eDESC.innerHTML = Math.round(number) + "=";

    /* display skilltype */
    if(skilltype == '物理傷害') offNUM = ATK, defNUM = DEF;
    else if(skilltype == '魔法傷害') offNUM = INT, defNUM = MDEF;


    /* offNUM*counterRate */
    eDESC.innerHTML += "("+Math.round(pre[offNUM])+"×"+counterRate.toFixed(2);
    /* defNUM*(1-negNUM)*terrainRate */
    if(!negNUM) eDESC.innerHTML += " - "+Math.round(opppre[defNUM])+"×"+terrainRate+")";
    else eDESC.innerHTML += " - "+Math.round(opppre[defNUM])+"×(1-"+negNUM+")×"+terrainRate+")";
    /* skillrate */
    eDESC.innerHTML += "÷2×"+skillrate+"×20";
    /* off DMGRATEINC */
    eDESC.innerHTML += "×(1";
    for(let j=0; j<sideRate.length; j++){
      if(sideRate[j].SOLDONLY != undefined && sideRate[j].SOLDONLY == true) continue;
      if(sideRate[j].MIDRATE[DMGRATEINC] > 0)
       eDESC.innerHTML+="+"+sideRate[j].MIDRATE[DMGRATEINC].toFixed(2)+"["+sideRate[j].NAME+"]";
      if(sideRate[j].MIDRATE[DMGRATEINC] < 0)
       eDESC.innerHTML+=sideRate[j].MIDRATE[DMGRATEINC].toFixed(2)+"["+sideRate[j].NAME+"]";
    }
    /* def DMGRATEDEC */
    for(let j=0; j<oppRate.length; j++){
      if(oppRate[j].SOLDONLY != undefined && oppRate[j].SOLDONLY == true) continue;
      if(oppRate[j].MIDRATE[DMGRATEDEC] > 0)
       eDESC.innerHTML+="-"+oppRate[j].MIDRATE[DMGRATEDEC].toFixed(2)+"["+oppRate[j].NAME+"]";
      if(oppRate[j].MIDRATE[DMGRATEDEC] < 0)
       eDESC.innerHTML+="+"+(oppRate[j].MIDRATE[DMGRATEDEC].toFixed(2)*-1)+"["+oppRate[j].NAME+"]";
    }
    eDESC.innerHTML += ")";

    /* skill dmg rate */
    if(skilldmg != 1){
        eDESC.innerHTML += "×(1";
        for(let j=0; j<sideRate.length; j++)
            if(sideRate[j].SKILLDMG != undefined && sideRate[j].SKILLDMG != 0)
                eDESC.innerHTML+="+"+sideRate[j].SKILLDMG.toFixed(2)+"["+sideRate[j].NAME+"]";
        eDESC.innerHTML += ")";
    }

    /* mulitply talent DMGDEC */
    if(talentDMGDEC != 0){
        eDESC.innerHTML += "×(1";
        for(let j=0; j<oppRate.length; j++)
            if(oppRate[j].TALENTDMGDEC != undefined && oppRate[j].TALENTDMGDEC != 0)
               eDESC.innerHTML+="-"+oppRate[j].TALENTDMGDEC.toFixed(2)+"["+oppRate[j].NAME+"]";
        eDESC.innerHTML += ")";
    }

    /* mulitply command DMGDEC */
    if(commandDMGDEC != 0){
        eDESC.innerHTML += "×(1";
        for(let j=0; j<oppRate.length; j++)
            if(oppRate[j].COMMANDDMGDEC != undefined && oppRate[j].COMMANDDMGDEC != 0)
               eDESC.innerHTML+="-"+oppRate[j].COMMANDDMGDEC.toFixed(2)+"["+oppRate[j].NAME+"]";
        eDESC.innerHTML += ")";
    }

    /* CRIT */
    if(crit) eDESC.innerHTML += "×"+mid[CRITDMG];
};

/* collect RATES from skills */
function getAllSkill(stage, side){
    var otherside;
    if(side == 'offense'){
        otherside = 'defense';
        sideBASE = combat.offBASEKNOWN;
        othersideBASE = combat.defBASEKNOWN;
        charNAME = combat.offChar.NAME;
        skillAREA = combat.offSkill.AREA;
    }
    else if(side == 'defense'){
        otherside = 'offense';
        sideBASE = combat.defBASEKNOWN;
        othersideBASE = combat.offBASEKNOWN;
        charNAME = combat.defChar.NAME;
        skillAREA = combat.defSkill.AREA;
    }
    /* PRE STAGE */
    if(stage == 'PRE'){
        var sideRate = [], othersideRate = [];
        var interact = [], oppinteract = [];
        // talent
        if(charNAME != '神崎堇'){
            sideRate.push(getTalentSkill(side));
            othersideRate.push(getTalentSkill(otherside));
        }
        // display sold FULLHP
        displaySoldHP(side, sideRate);
        displaySoldHP(otherside, othersideRate);
        // talent
        if(charNAME == '神崎堇'){
            sideRate.push(getTalentSkill(side));
            othersideRate.push(getTalentSkill(otherside));
        }
        // training
        sideRate = [...sideRate, ...getTrainingSkill(side)];
        othersideRate = [...othersideRate, ...getTrainingSkill(otherside)];
        // soldier
        sideRate.push(getSoldierSkill(side));
        othersideRate.push(getSoldierSkill(otherside));
        // heart & enchant
        sideRate.push(getHeartSkill(side));
        othersideRate.push(getHeartSkill(otherside));
        sideRate.push(getEnchantSkill(side));
        othersideRate.push(getEnchantSkill(otherside));
        interact.push(getInteractTalentSkill(side));
        oppinteract.push(getInteractTalentSkill(otherside));
        // command & passive & buff & debuff
        sideRate = [...sideRate, ...getBUFFSkill(side)];
        othersideRate = [...othersideRate, ...getBUFFSkill(otherside)];
        sideRate = [...sideRate, ...getDEBUFFSkill(side)];
        othersideRate = [...othersideRate, ...getDEBUFFSkill(otherside)];
        sideRate = [...sideRate, ...getCommandSkill(side)];
        othersideRate = [...othersideRate, ...getCommandSkill(otherside)];
        sideRate = [...sideRate, ...getPassiveSkill(side)];
        othersideRate = [...othersideRate, ...getPassiveSkill(otherside)];
        interact = [...interact, ...getInteractBUFFSkill(side)];
        oppinteract = [...oppinteract, ...getInteractBUFFSkill(otherside)];
        interact = [...interact, ...getInteractPassiveSkill(side)];
        oppinteract = [...oppinteract, ...getInteractPassiveSkill(otherside)];
        // equipment
        sideRate.push(getWeaponSkill(side));
        othersideRate.push(getWeaponSkill(otherside));
        sideRate.push(getArmorSkill(side));
        othersideRate.push(getArmorSkill(otherside));
        sideRate.push(getHelmetSkill(side));
        othersideRate.push(getHelmetSkill(otherside));
        sideRate.push(getAccessorySkill(side));
        othersideRate.push(getAccessorySkill(otherside));
        // display HEAL & HEALED
        displayHEALS(side);
        displayHEALS(otherside);
        // display NUMS
        if(sideBASE){
            displayPRENUMS(side, sideRate);
            getPRENUMS(side);
            displayINTERACT(side, interact);
        }
        else{
            displayBASENUMS(side, sideRate);
            getBASENUMS(side);
        }
        if(othersideBASE){
            displayPRENUMS(otherside, othersideRate);
            getPRENUMS(otherside);
            displayINTERACT(otherside, oppinteract);
        }
        else{
            displayBASENUMS(otherside, othersideRate);
            getBASENUMS(otherside);
        }
        // display soldNUMS
        displaySoldNUMS(side, sideRate);
        displaySoldNUMS(otherside, othersideRate);
    }
    /* MID STAGE */
    if(stage == 'MID'){
        // do all true dmg stuff and check perHP related skills
        var sideRate = [], othersideRate = [];
        var interact = [], oppinteract = [];
        // talent & heart & enchant
        sideRate.push(getMIDTalentSkill(side));
        othersideRate.push(getMIDTalentSkill(otherside));
        sideRate.push(getMIDHeartSkill(side));
        othersideRate.push(getMIDHeartSkill(otherside));
        sideRate.push(getMIDEnchantSkill(side));
        othersideRate.push(getMIDEnchantSkill(otherside));
        interact.push(getMIDInteractTalentSkill(side));
        oppinteract.push(getMIDInteractTalentSkill(otherside));
        // command & passive & buff & debuff
        sideRate = [...sideRate, ...getMIDBUFFSkill(side)];
        othersideRate = [...othersideRate, ...getMIDBUFFSkill(otherside)];
        sideRate = [...sideRate, ...getMIDDEBUFFSkill(side)];
        othersideRate = [...othersideRate, ...getMIDDEBUFFSkill(otherside)];
        sideRate = [...sideRate, ...getMIDCommandSkill(side)];
        othersideRate = [...othersideRate, ...getMIDCommandSkill(otherside)];
        sideRate = [...sideRate, ...getMIDPassiveSkill(side)];
        othersideRate = [...othersideRate, ...getMIDPassiveSkill(otherside)];
        interact = [...interact, ...getMIDInteractBUFFSkill(side)];
        oppinteract = [...oppinteract, ...getMIDInteractBUFFSkill(otherside)];
        interact = [...interact, ...getMIDInteractPassiveSkill(side)];
        oppinteract = [...oppinteract, ...getMIDInteractPassiveSkill(otherside)];
        // equipment
        sideRate.push(getMIDWeaponSkill(side));
        othersideRate.push(getMIDWeaponSkill(otherside));
        sideRate.push(getMIDArmorSkill(side));
        othersideRate.push(getMIDArmorSkill(otherside));
        sideRate.push(getMIDHelmetSkill(side));
        othersideRate.push(getMIDHelmetSkill(otherside));
        sideRate.push(getMIDAccessorySkill(side));
        othersideRate.push(getMIDAccessorySkill(otherside));
        // training
        sideRate = [...sideRate, ...getMIDTrainingSkill(side)];
        othersideRate = [...othersideRate, ...getMIDTrainingSkill(otherside)];
        // soldier
        sideRate.push(getMIDSoldierSkill(side));
        othersideRate.push(getMIDSoldierSkill(otherside));
        // skill
        sideRate.push(getMIDSkillSkill(side));
        othersideRate.push(getMIDSkillSkill(otherside));
        // single skill
        if(skillAREA == '單體'){
            hideResult(skillAREA);
            // display MIDNUMS
            displayMIDNUMS(side, sideRate, othersideRate);
            displayMIDNUMS(otherside, othersideRate, sideRate);
            // display MIDINTERACT
            displayMIDINTERACT(side, interact);
            displayMIDINTERACT(otherside, oppinteract);
            // display MID soldNUMS
            displayMIDSoldNUMS(side, sideRate, othersideRate);
            displayMIDSoldNUMS(otherside, othersideRate, sideRate);
            // display ONEHIT
            displayONEHIT(side, sideRate, othersideRate, false);
            displayONEHIT(side, sideRate, othersideRate, true);
            displayONEHIT(otherside, othersideRate, sideRate, false);
            displayONEHIT(otherside, othersideRate, sideRate, true);
            // display soldier ONEHIT
            displaySoldONEHIT(side, sideRate, othersideRate, false);
            displaySoldONEHIT(side, sideRate, othersideRate, true);
            displaySoldONEHIT(otherside, othersideRate, sideRate, false);
            displaySoldONEHIT(otherside, othersideRate, sideRate, true);
        }
        // area skill
        else{
            hideResult(skillAREA);
            // display AOE
            // char -> char
            displayAOE(side, sideRate, othersideRate, false);
            // char -> sold
            //displaySoldAOE(side, sideRate, othersideRate, false);
        }
    }
};

function wholeCombat(){
    /* get all data/functions */
    resetAllRATE();
    getCharData('offense');
    getCharData('defense');
    getTerrainRATE('offense');
    getTerrainRATE('defense');
    cal_MOVETYPE('offense');
    cal_MOVETYPE('defense');
    getAllSkill('PRE', 'offense');
    getCounterRATE('offense');
    getCounterRATE('defense');
    getSoldCounterRATE('offense');
    getSoldCounterRATE('defense');
    getAllSkill('MID', 'offense');
    displayMOVETYPE('offense');
    displayMOVETYPE('defense');
};

var myJSON, lastoffJSON, lastdefJSON;
function useCODE(side){
    if(side == 'offense') SIDE = 'off', d='';
    if(side == 'defense') SIDE = 'def', d='d';
    myJSON = document.getElementById(SIDE+'JSON').value;
    if(myJSON == '') return;
    else if(side == 'offense' && myJSON == lastoffJSON) return;
    else if(side == 'defense' && myJSON == lastdefJSON) return;
    else{
        let myOBJ = JSON.parse(myJSON);
        selectParty(myOBJ.party+d);
        selectChar(myOBJ.char+d);
        for(let i=1; i<myOBJ.jobNo; i++)
            changeJob(side);
        selectBUFF(side, '攻擊、智力+N％'+d);
        selectBUFF(side, '攻擊、智力+N％'+d);
        selectBUFF(side, '攻擊、智力+N％'+d);
        selectBUFF(side, '防禦+N％'+d);
        selectBUFF(side, '防禦+N％'+d);
        selectBUFF(side, '防禦+N％'+d);
        selectBUFF(side, '魔防+N％'+d);
        selectBUFF(side, '魔防+N％'+d);
        selectBUFF(side, '魔防+N％'+d);
        selectBUFF(side, '魔防+N％'+d);
        selectWeapon(side, myOBJ.weapon+d);
        selectArmor(side, myOBJ.armor+d);
        selectHelmet(side, myOBJ.helmet+d);
        selectAccessory(side, myOBJ.accessory+d);
        selectEnchant(myOBJ.enchant+d);
        document.getElementById(SIDE+'HP').value = myOBJ.bases[0]+"/"+myOBJ.bases[0];
        document.getElementById(SIDE+'BASEATKinput').value = myOBJ.bases[1];
        document.getElementById(SIDE+'BASEINTinput').value = myOBJ.bases[2];
        document.getElementById(SIDE+'BASEDEFinput').value = myOBJ.bases[3];
        document.getElementById(SIDE+'BASEMDEFinput').value = myOBJ.bases[4];
        document.getElementById(SIDE+'BASEDEXinput').value = myOBJ.bases[5];
        if(side == 'offense') lastoffJSON = myJSON;
        if(side == 'defense') lastdefJSON = myJSON;
    }
};

function clearCODE(side){
    if(side == 'offense') SIDE = 'off';
    if(side == 'defense') SIDE = 'def';
    document.getElementById(SIDE+'JSON').value = '';
};

function hideResult(type){
    singleSKILLTABLE = document.getElementById('singleSKILLTABLE');
    areaSKILLTABLE = document.getElementById('areaSKILLTABLE');
    if(type == '單體'){
        singleSKILLTABLE.style = 'width:600px;';
        areaSKILLTABLE.style = 'width:600px;display:none;';
    }
    else{
        singleSKILLTABLE.style = 'width:600px;display:none;';
        areaSKILLTABLE.style = 'width:600px;';
    }
};

window.addEventListener("click", function getSelected(){
    // offense
    var selected = document.getElementsByClassName('offense selected');
    for(var i=0; i<selected.length; i++){
        if(selected[i].classList.contains('party')){
            combat.offParty = selected[i].id;
            //combat.offParty = party.find(x => x.NAME === combat.offParty);
        }
        else if(selected[i].classList.contains('character')){
            combat.offChar = selected[i].id;
            combat.offChar = char.find(x => x.NAME === combat.offChar);
            combat.offTalent = talent.find(x => x.NAME === combat.offChar.TALENT);
            combat.offHeart = heart.find(x => x.NAME === combat.offChar.NAME+'大心');
        }
        else if(selected[i].classList.contains('skill')){
            combat.offSkill = selected[i].id;
            combat.offSkill = skill.find(x => x.NAME === combat.offSkill);
            combat.offDMGTYPE = combat.offSkill.TYPE;
            displaySkillInfo('offense');
        }
        else if(selected[i].classList.contains('soldier')){
            combat.offSoldier = selected[i].id;
            combat.offSoldier = soldier.find(x => x.NAME === combat.offSoldier);
            combat.offsoldDMGTYPE = combat.offSoldier.DMGTYPE;
        }
        else if(selected[i].classList.contains('terrain')){
            combat.offTerrain = selected[i].id;
            //combat.offTerrain = terrain.find(x => x.NAME === combat.offTerrain);
        }
        else if(selected[i].classList.contains('enchant')){
            combat.offEnchant = selected[i].id;
            combat.offEnchant = enchant.find(x => x.NAME === combat.offEnchant);
        }
    }

    // defense
    var selected = document.getElementsByClassName('defense selected');
    for(var i=0; i<selected.length; i++){
        if(selected[i].classList.contains('party')){
            combat.defParty = selected[i].id.slice(0, -1);
            //combat.defParty = party.find(x => x.NAME === combat.defParty);
        }
        else if(selected[i].classList.contains('character')){
            combat.defChar = selected[i].id.slice(0, -1);
            combat.defChar = char.find(x => x.NAME === combat.defChar);
            combat.defTalent = talent.find(x => x.NAME === combat.defChar.TALENT);
            combat.defHeart = heart.find(x => x.NAME === combat.defChar.NAME+'大心');
        }
        else if(selected[i].classList.contains('soldier')){
            combat.defSoldier = selected[i].id.slice(0, -1);
            combat.defSoldier = soldier.find(x => x.NAME === combat.defSoldier);
            combat.defsoldDMGTYPE = combat.defSoldier.DMGTYPE;
        }
        else if(selected[i].classList.contains('terrain')){
            combat.defTerrain = selected[i].id.slice(0, -1);
            //combat.defTerrain = terrain.find(x => x.NAME === combat.defTerrain);
        }
        else if(selected[i].classList.contains('enchant')){
            combat.defEnchant = selected[i].id.slice(0, -1);
            combat.defEnchant = enchant.find(x => x.NAME === combat.defEnchant);
        }
        // combat.defSkill depends on char
        if(getDmgtype('defense') == '物理傷害')
            combat.defSkill = skill.find(x => x.NAME === "普攻(物)");
        else if(getDmgtype('defense') == '魔法傷害')
            combat.defSkill = skill.find(x => x.NAME === "普攻(法)");
        // DMGTYPE depend on char
        combat.defDMGTYPE = getDmgtype('defense');
    }
    /* use CODE from BASE calculator */
    if(combat.offBASEKNOWN) useCODE('offense');
    if(combat.defBASEKNOWN) useCODE('defense');
    /* combat */
    wholeCombat();
    /* sold/char change */
    combat.offCharChange = false;
    combat.offSoldChange = false;
    combat.defCharChange = false;
    combat.defSoldChange = false;
});

