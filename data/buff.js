var buff = [{
    NAME: '攻擊、智力+N％',
    TYPE: ['一般'], offINDEX: 1, defINDEX: 1,
    DATA: [0, 0.1266, 0.15, 0.20, 0.30], MAX: 4,
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense')
            return [this.DATA[this.offINDEX], this.DATA[this.offINDEX], 0, 0, 0];
        if(side == 'defense')
            return [this.DATA[this.defINDEX], this.DATA[this.defINDEX], 0, 0, 0];
    },
    DESC: '攻擊、智力+[DATA]%'
},{
    NAME: '防禦+N％',
    TYPE: ['一般'], offINDEX: 1, defINDEX: 1,
    DATA: [0, 0.1266, 0.15, 0.20, 0.30], MAX: 4,
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense')
            return [0, 0, this.DATA[this.offINDEX], 0, 0];
        if(side == 'defense')
            return [0, 0, this.DATA[this.defINDEX], 0, 0];
    },
    DESC: '防禦+[DATA]%'
},{
    NAME: '魔防+N％',
    TYPE: ['一般'], offINDEX: 1, defINDEX: 1,
    DATA: [0, 0.1266, 0.15, 0.20, 0.30], MAX: 4,
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense')
            return [0, 0, 0, this.DATA[this.offINDEX], 0];
        if(side == 'defense')
            return [0, 0, 0, this.DATA[this.defINDEX], 0];
    },
    DESC: '魔防+[DATA]%'
},{
    NAME: '技巧+N％',
    TYPE: ['一般'], offINDEX: 1, defINDEX: 1,
    DATA: [0, 0.1266, 0.20, 0.30], MAX: 3,
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense')
            return [0, 0, 0, 0, this.DATA[this.offINDEX]];
        if(side == 'defense')
            return [0, 0, 0, 0, this.DATA[this.defINDEX]];
    },
    DESC: '技巧+[DATA]%'
},{
    NAME: '造成傷害提升N％',
    TYPE: ['一般'], offINDEX: 1, defINDEX: 1,
    DATA: [0, 0.10, 0.15, 0.20, 0.30], MAX: 4,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense')
            return [0, 0, 0, 0, 0, 0, 0, this.DATA[this.offINDEX], 0, 0, 0];
        if(side == 'defense')
            return [0, 0, 0, 0, 0, 0, 0, this.DATA[this.defINDEX], 0, 0, 0];
    },
    DESC: '造成傷害提升[DATA]%'
},{
    NAME: '受到傷害降低N％',
    TYPE: ['一般'], offINDEX: 1, defINDEX: 1,
    DATA: [0, 0.10, 0.15, 0.20, 0.30], MAX: 4,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense')
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this.DATA[this.offINDEX]];
        if(side == 'defense')
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this.DATA[this.defINDEX]];
    },
    DESC: '受到傷害降低[DATA]%'
},{
    NAME: '暴擊率+15％、暴擊傷害+15％',
    TYPE: ['一般'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        return [0, 0, 0, 0, 0, 0.15, 0.15, 0, 0, 0, 0];
    },
    DESC: '暴擊率+15％、暴擊傷害+15％'
},{
    /* NOT PERCENTAGE */
    NAME: '移動力+N',
    TYPE: ['一般'], offINDEX: 1, defINDEX: 1,
    DATA: [0, 0.01, 0.02, 0.03], MAX: 3,
    MOVE: 1,
    DESC: '移動力+[DATA]'
},{
    NAME: '回合結束恢復N％生命',
    TYPE: ['一般'], offINDEX: 1, defINDEX: 1,
    DATA: [0, 0.2, 0.5], MAX: 2,
    DESC: '回合結束恢復[DATA]%生命'
},{
    NAME: '免疫“攻擊、智力降低”、“無法使用主動技能”',
    TYPE: ['一般'],
    DESC: '免疫“攻擊、智力降低”、“無法使用主動技能”'
},{
    NAME: '免疫“暈眩”、“無法遭受強化效果”、“移動力降低”',
    TYPE: ['一般'],
    DESC: '免疫“暈眩”、“無法遭受強化效果”、“移動力降低”'
},{
    NAME: '免疫“固定傷害”',
    TYPE: ['一般'],
    DESC: '免疫“固定傷害”'
},{
    NAME: '免疫“防禦、魔防降低”、“無法遭受治療”',
    TYPE: ['一般'],
    DESC: '免疫“防禦、魔防降低”、“無法遭受治療”'
},{
    NAME: '免疫“被動技能失效”、“無法遭受強化效果”',
    TYPE: ['一般'],
    DESC: '免疫“被動技能失效”、“無法遭受強化效果”'
},{
    NAME: '免疫“治療反轉（施加的治療轉化為傷害）”、“無法再行動”',
    TYPE: ['一般'],
    DESC: '免疫“治療反轉（施加的治療轉化為傷害）”、“無法再行動”'
},{
    NAME: '免疫“移動力降低”、“傷口詛咒（遭受治療轉化為傷害）”',
    TYPE: ['一般'],
    DESC: '免疫“移動力降低”、“傷口詛咒（遭受治療轉化為傷害）”'
},{
    NAME: '免疫',
    TYPE: ['一般'],
    DESC: '免疫所有弱化效果'
},{
    NAME: '免疫(不可驅散)',
    TYPE: ['澤瑞達'],
    DESC: '免疫所有弱化效果'
},{
    NAME: '再生',
    TYPE: ['一般'],
    DESC: '戰後恢復部隊10%生命'
},{
//情報分析
    NAME: '防禦+10％(情報分析)',
    TYPE: ['一般'],
    DEF: 0.1,
    DESC: '防禦+10%(情報分析)'
},{
    NAME: '魔防+10％(情報分析)',
    TYPE: ['一般'],
    MDEF: 0.1,
    DESC: '魔防+10%(情報分析)'
},{
    NAME: '憐憫之心',
    TYPE: ['一般'],
    HEALED: 0.3,
    DESC: '接受治療效果+30%'
},{
    NAME: '愛麗絲大爆發',
    TYPE: ['一般'],
    DESC: '不會受到地形導致的移動力下降影響'
},{
    NAME: '夢幻之吻',
    TYPE: ['一般'],
    DESC: '行動結束時恢復愛麗絲智力3倍的生命'
},{
    NAME: '女王鞭撻',
    TYPE: ['一般'],
    ATK: 0.1, INT: 0.1, DEX: 0.1, CRITRATEINC: 0.1,
    DMGINC: 0.1, CRITDMGINC:0.1, TRUEDMGINC: 0.1,
    DESC: '造成所有傷害、固定傷害、暴擊、暴擊傷害、智力、攻擊、技巧提升10%'
},{
    NAME: '女將軍的鐵腕',
    TYPE: ['一般'],
    /* HERO DMG INC */
    DMGINC: 0.2,
    DESC: '主動攻擊進入戰鬥時，英雄傷害提升20%，戰後損失10%生命。'
},{
    NAME: '進擊的加護(增傷)',
    TYPE: ['一般'],
    ODMGINC: 0.3,
    DESC: '主動攻擊進入戰鬥時造成傷害提升30%'
},{
    NAME: '進擊的加護(減傷)',
    TYPE: ['一般'],
    ODMGDEC: 0.5,
    DESC: '主動攻擊進入戰鬥時遭受傷害降低50%'
},{
    NAME: '治癒之光',
    TYPE: ['一般'],
    DESC: '戰後回復蒂亞莉絲智力3倍的生命。'
},{
    NAME: '死守',
    TYPE: ['一般'],
    DESC: '戰前恢復維拉智力5倍的生命'
},{
    NAME: '吐槽',
    TYPE: ['一般'],
    DESC: '行動結束時，對4格以內的2個敵軍部隊施加1個隨機的弱化效果'
},{
    NAME: '聖盾',
    TYPE: ['一般'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        else if(side == 'defense') perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(perHP == 1) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25];
        else return false;
    },
    DESC: '生命值100%時，遭受傷害降低25%'
},{
    NAME: '魔法新衣',
    TYPE: ['一般'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        else if(side == 'defense') perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(perHP < 0.8) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5];
        else return false;
    },
    DESC: '如果部隊生命值低於80%時，遭受的下一次傷害降低50%'
},{
    NAME: '強大的助力',
    TYPE: ['一般'],
    AOEDMGINC: 0.2,
    DESC: '範圍技能傷害提升20%'
},{
    NAME: '愛的聲援',
    TYPE: ['一般'],
    MOVE: 1,
    DESC: '移動力+1'
},{
    NAME: '遠古智慧',
    TYPE: ['一般'],
    CHARONLY: true,
    DMGINC: 0.2,
    DESC: '英雄傷害提升20%'
},{
    NAME: '戰神怒火',
    TYPE: ['一般'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense'){
            this.SKILLDMG = undefined;
            return [0, 0, 0, 0, 0, 0, 0, 0.1, 0, 0, 0];
        }
        else if(side == 'offense' && combat.offSkill.NAME != "普攻(物)" && combat.offSkill.NAME != "普攻(法)"){
            this.SKILLDMG = 0.1;
            return false;
        }
        else this.SKILLDMG = undefined;
    },
    DESC: '技能傷害提升10%，反擊傷害提升10%'
},{
    NAME: '[氣浪]',
    TYPE: ['利昂', '蘭芳特', '羅莎莉婭', '海倫娜'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        else if(side == 'defense') perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(perHP > 0.8) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3];
        else return false;
    },
    DESC: '主動進入戰鬥時，如果部隊生命值大於80%，戰鬥中遭受傷害降低30%。'
},{
    NAME: '[增援]',
    TYPE: ['利昂', '蘭芳特', '羅莎莉婭', '海倫娜'],
    DESC: '行動結束時，恢復自身部隊20%生命。'
},{
    NAME: '馭水',
    TYPE: ['維拉玖', '安潔麗娜', '利斯塔', '皮耶魯', '古巨拉', '伊露希亞', '阿爾弗雷德'],
    DESC: '移動時所有可以通過的地形都視為“水中”'
},{
    NAME: '冷血',
    TYPE: ['銀狼', '歐米伽', '洛加'],
    CRITRATEINC: 0.15, CRITDMGINC: 0.15,
    DESC: '部隊暴擊率和暴擊傷害提升15%'
},{
    NAME: '護衛',
    TYPE: ['格尼爾', '桑原和真'],
    DESC: '替相鄰2格友軍承受物理攻擊'
},{
    NAME: '替相鄰2格友軍承受物理攻擊',
    TYPE: ['芙蕾雅','SP芙蕾雅','蘭迪烏斯','雷丁','格尼爾','斯科特','阿倫','賽蕾娜','巴爾加斯'],
    DESC: '替相鄰2格友軍承受物理攻擊'
},{
    NAME: '海衛',
    TYPE: ['古巨拉','伊露希亞'],
    DESC: '替相鄰2格友軍承受物理攻擊'
},{
    NAME: '替相鄰2格友軍承受魔法攻擊',
    NAME: '替相鄰2格友軍承受魔法攻擊',
    TYPE: ['芙蕾雅','SP芙蕾雅','妮絲蒂爾','古巨拉'],
    DESC: '替相鄰2格友軍承受魔法攻擊'
},{
    NAME: '槍陣',
    TYPE: ['芙蕾雅','SP芙蕾雅','蘭迪烏斯','雷丁','格尼爾','斯科特',' 	希爾達'],
    DESC: '近戰戰鬥結束後，必定觸發[倒刺]的[固定傷害]'
},{
    NAME: '劍刃領域',
    TYPE: ['貝蒂'],
    ATK: 0.2, MDEF: 0.2,
    DESC: '攻擊+20%，魔防+20%'
},{
    NAME: '[招架]',
    TYPE: ['貝蒂', '巴恩哈特', '亞魯特繆拉'],
    SKILLTYPE: ['MIDADD'],
    MIDADD: function(side){
        if(side == 'defense') return [0.07, 0, 1, 0, 0];
        else return false;
    },
    DESC: '被攻擊時，將“攻擊”的7%增加到“防禦”上'
},{
    /* TRUE DMG */
    NAME: '[倒刺]',
    TYPE: ['亞魯特繆拉'],
    DESC: '被近戰攻擊進入戰鬥後，戰後若本部隊生命值大於50%則對敵軍造成一次[固定傷害]'
},{
    NAME: '[力突]',
    TYPE: ['阿倫','巴爾加斯','賽蕾娜','格尼爾'],
    SKILLTYPE: ['SUB', 'MIDSUB'],
    SUB: function(side){
        return [1.6, 0, 1, 0, 0];
    },
    MIDSUB: function(side){
        return [1.6, 0, 1, 0, 0];
    },
    DESC: '用“防禦”的1.6倍代替“攻擊”'
},{
    NAME: '遭受暴擊率降低20％',
    TYPE: ['雷丁','阿倫','賽蕾娜','巴爾加斯','雅兒貝德','希爾達'],
    CRITRATEDEC: 0.2,
    DESC: '遭受暴擊率降低20%'
},{
    NAME: '[疾風]',
    TYPE: ['雪莉'],
    DESC: '行動結束時，有20%的機率可以再次行動'
},{
/*
    NAME: '攻擊、防禦增加15%',
    TYPE: ['路因'],
    ATK: 0.15, DEF: 0.15,
    DESC: '攻擊、防禦增加15%，可疊加'
},{
*/
    NAME: '累積的知識',
    TYPE: ['海恩'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03, 0.04, 0.05], MAX: 5,
    INT: 0.06,
    DESC: '智力提升6%，最高累積5個(當前[DATA]個)'
},{
    NAME: '堅忍的反擊',
    TYPE: ['格尼爾'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03], MAX: 3,
    ATK: 0.10, DEF: 0.10,
    DESC: '攻擊、防禦+10%，最高累積3個(當前[DATA]個)'
},{
    /* skill id duplicate  */
    NAME: '魔性之血',
    TYPE: ['索尼婭'], ACC: true,
    DATA: [0, 0.01, 0.02], MAX: 2,
    ATK: 0.2, INT: 0.2,DEF: 0.2, MDEF: 0.2,
    DESC: '攻擊、智力、防禦、魔防提升20%，最高累積2層(當前[DATA]層)'
},{
    NAME: '海灘派對',
    TYPE: ['阿爾弗雷德'],
    DESC: '自身為中心的3格範圍內所有「水兵」英雄移動時所有可以通過的地形都視為“水中”'
},{
    NAME: '猛進',
    TYPE: ['帕恩'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03], MAX: 3,
    ATK: 0.03, DEX: 0.03, MOVE: 1,
    DESC: '攻擊、技巧+3%，移動力+1，最高累積3層(當前[DATA]層)'
},{
    NAME: '信仰的榮光',
    TYPE: ['帕恩'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        run = combat.run;
        switch(run){
            case 0:
                return false;
            case 1:
                return [0.05, 0.05, 0.05, 0.05, 0.05, 0, 0, 0, 0, 0, 0];
            case 2:
                return [0.10, 0.10, 0.10, 0.10, 0.10, 0, 0, 0, 0, 0, 0];
            case 3:
                return [0.15, 0.15, 0.15, 0.15, 0.15, 0, 0, 0, 0, 0, 0];
            case 4:
                return [0.20, 0.20, 0.20, 0.20, 0.20, 0, 0, 0, 0, 0, 0];
            default:
                return [0.25, 0.25, 0.25, 0.25, 0.25, 0, 0, 0, 0, 0, 0];
        }
    },
    DESC: '進入戰鬥前每移動一格，除生命以外全屬性提升5%(最高25%)'
},{
    NAME: '鐵薔薇(固傷)',
    TYPE: ['芙蕾雅','SP芙蕾雅'],
    DESC: '戰鬥結束後，對敵方造成一次英雄魔防2.5倍的[固定傷害]'
},{
    NAME: '鐵薔薇(魔法減傷)',
    TYPE: ['芙蕾雅','SP芙蕾雅'],
    SKILLTYPE: ['MIDRATE', 'SUB', 'MIDSUB'],
    MIDRATE: function(side){
        if(side == 'offense') oppDMGTYPE = combat.defDMGTYPE;
        else if(side == 'defense') oppDMGTYPE = combat.offDMGTYPE;
        if(oppDMGTYPE == '魔法傷害') return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2];
        else return false;
    },
    SUB: function(side){
        return [0, 0, 0.8, 1, 0];
    },
    MIDSUB: function(side){
        return [0, 0, 0.8, 1, 0];
    },
    DESC: '部隊遭受魔法傷害降低20%，用“魔防”的0.8倍代替“防禦'
},{
    NAME: '[迴旋]',
    TYPE: ['弗拉基亞'],
    DMGDEC: 0.2,
    DESC: '遭受所有傷害降低20%',
},{
    NAME: '變化使',
    TYPE: ['弗拉基亞'],
    ATK: 0.25, INT: 0.25,
    DESC: '攻擊、智力+25%'
},{
    NAME: '輕靈倩影',
    TYPE: ['布琳達'],
    DMGINC: 0.1, DMGDEC: 0.1,
    DESC: '造成傷害提高10%，遭受傷害降低10%'
},{
    NAME: '布偶娃娃',
    TYPE: ['愛麗絲'],
    DESC: '行動結束時，恢復自身周圍2格範圍內所有友軍部隊生命，恢復量為愛麗絲智力的2倍'
},{
    NAME: '健康',
    TYPE: ['桑原和真'],
    SKILLTYPE: ['SUB', 'MIDSUB'],
    SUB: function(side){
        return [1, 0, 0.6, 0, 0];
    },
    MIDSUB: function(side){
        return [1, 0, 0.6, 0, 0];
    },
    DESC: '用“攻擊”的0.6倍代替“防禦”'
},{
    NAME: '愛即正義',
    TYPE: ['桑原和真'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppDMGTYPE = combat.defDMGTYPE;
        else if(side == 'defense') oppDMGTYPE = combat.offDMGTYPE;
        if(oppDMGTYPE == '物理傷害') return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3];
        else return false;
    },
    DESC: '遭受物理傷害降低30%'
},{
    NAME: '復仇龍印',
    TYPE: ['蕾娜塔'],
    MOVE: 2,
    DESC: '移動力+2'
},{
    NAME: '流浪的公主',
    TYPE: ['克拉蕾特'], offINDEX: 1, defINDEX: 1,
    DATA: [0, 0.01, 0.02, 0.03, 0.04, 0.05], MAX: 5,
    DESC: '移動力加成[DATA]'
},{
    NAME: '無雙的霸主',
    TYPE: ['亞魯特繆拉'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03, 0.04], MAX: 4,
    ATK: 0.1,
    DESC: '攻擊提升10%，遭受物理傷害降低5%，最高可以累積4層。(當前[DATA]層)'
},{
    NAME: '[御風]',
    TYPE: ['露娜','亞魯特繆拉','雪莉','安潔麗娜','亞修拉姆','蕾娜塔'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') perHP = combat.offHP/combatoffFULLHP;
        else if(side == 'defense') perHP = combat.defHP/combatdefFULLHP;
        if(perHP > 0.5) return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15];
        else return false;
    },
    DESC: '生命大於50%進入戰鬥時，遭受傷害降低15%。'
},{
//沒人有藏馬，資料不明 QAQ
    NAME: '妖狐',
    /* combat neg */
    /* MDEF NEG */
    TYPE: ['藏馬'],
    DESC: '自身所處地形視為“草地”；無視近戰傷害減免；主動攻擊時，無視敵方20%魔防'
},{
    NAME: '風華圓舞陣',
    TYPE: ['藏馬'],
    DESC: '若敵軍行動結束時，位於藏馬周圍4格內，會受到其智力2倍的[固定傷害]'
},{
    NAME: '華嚴薔薇陣',
    TYPE: ['藏馬'],
    DESC: '位於藏馬周圍4格範圍內，若敵軍擁有[魔界種子]效果時，造成傷害前會受到其智力2倍的[固定傷害]'
},{
    NAME: '黑龍波',
    TYPE: ['飛影'],
    MOVE: 1, CRITDMGINC: 0.2,
    DESC: '移動力+1，暴擊傷害提升20%，攻擊後可以再次行動（再行動效果每回合只能觸發1次）'
},{
    NAME: '大陸榮光',
    TYPE: ['雪露法妮爾'],
    DESC: '技能射程+1，範圍+1'
},{
    NAME: '女神的代行者',
    TYPE: ['女神化身'],
    MOVE: 2,
    DESC: '移動力+2'
},{
    NAME: '代行神力',
    TYPE: ['女神化身'],
    MOVE: -3,
    DESC: '移動力-3，使用技能時部隊射程+3，行動結束時，恢復自身1.5倍智力的生命，並驅散1個弱化狀態'
},{
    NAME: '聖樹庇護',
    TYPE: ['拉姆達'],
    DESC: '周圍2格以內的所有友軍部隊受到聖樹庇護的效果，持續2回合。'
},{
    NAME: '奕能法衣',
    TYPE: ['諾埃米'],
    ODMGINC: 0.2, ODMGDEC: 0.2,
    /* HEAL AFTER BATTLE */
    DESC: '自身部隊之後的2次主動攻擊進入戰鬥時，“遭受傷害降低20%，造成傷害提升20% ”。且在狀態持續期間“部隊射程+ 2，在行動結束時，恢復自身1.5倍智力的生命值，並驅散1個弱化狀態”'
},{
    NAME: '團結的意志',
    TYPE: ['蘭迪烏斯'],
    ATK: 0.2,
    SKILLTYPE: ['ADD', 'MIDADD'],
    ADD: function(side){
        return [0.15, 0, 1, 1, 0];
    },
    MIDADD: function(side){
        return [0.15, 0, 1, 1, 0];
    },
    DESC: '攻擊提升20%，並將攻擊的15%增加到防禦和魔防上'
},{
    NAME: '替相鄰2格友軍承受所有攻擊',
    TYPE: ['蘭迪烏斯','雷丁','神崎堇','艾米莉亞','希爾達'],
    DESC: '替相鄰2格友軍承受所有攻擊'
},{
    NAME: '止水',
    TYPE: ['蘭迪烏斯'],
    DESC: '周圍2格以內的所有友軍部隊遭受暴擊率降低30%，遭受遠程傷害降低15%。'
},{
    NAME: '明鏡止水',
    TYPE: ['蘭迪烏斯'],
    DESC: '周圍3格以內的所有友軍部隊遭受暴擊率降低30%，遭受遠程傷害降低15%，遭受治療效果提升15%；周圍2格以內的所有敵軍部隊無法觸發“再移動”效果。'
},{
    NAME: '[信仰]',
    TYPE: ['羅莎莉婭'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03], MAX: 3,
    DMGINC: 0.05, DMGDEC: 0.05,
    DESC: '造成傷害提升5%，遭受傷害降低5%，可以累積，最多可以累積3個。(當前[DATA]個)'
},{
/*沒布琳達，不知道是否屬於強化效果, 謎騎不屬於強化
    NAME: '風華典範', TYPE: ['布琳達'],
    DESC: '累積3次後，在行動結束時，可以額外行動一次。'
},{
*/
    NAME: '魔武',
    TYPE: ['克蘿賽','傑利奧魯&蕾拉'],
    /* DMGTYPE CHANGE */
    SKILLTYPE: ['ADD', 'MIDADD'],
    ADD: function(side){
        return [0.1, 1, 0, 0, 0];
    },
    MIDADD: function(side){
        return [0.1, 1, 0, 0, 0];
    },
    DESC: '英雄造成的魔法傷害，全部視為物理傷害，並將“攻擊”的10%增加到“智力”上'
},{
    NAME: '增幅',
    TYPE: ['傑利奧魯&蕾拉'],
    /* DMGTYPE CHANGE */
    SKILLTYPE: ['ADD', 'MIDADD'],
    ADD: function(side){
        return [1, 0.1, 0, 0, 0];
    },
    MIDADD: function(side){
        return [1, 0.1, 0, 0, 0];
    },
    DESC: '英雄造成的物理傷害，全部視為魔法傷害，並將“智力”的10%增加到“攻擊”上'
},{
    NAME: '高階增幅',
    TYPE: ['傑利奧魯&蕾拉'],
    /* DMGTYPE CHANGE */
    SKILLTYPE: ['ADD', 'MIDADD'],
    ADD: function(side){
        return [1, 0.5, 0, 0, 0];
    },
    MIDADD: function(side){
        return [1, 0.5, 0, 0, 0];
    },
    DESC: '英雄所有的傷害全部變為物理傷害，並將“智力”的50%增加到“攻擊”上'
},{
    NAME: '高階魔武',
    TYPE: ['傑利奧魯&蕾拉'],
    /* DMGTYPE CHANGE */
    SKILLTYPE: ['ADD', 'MIDADD'],
    ADD: function(side){
        return [0.5, 1, 0, 0, 0];
    },
    MIDADD: function(side){
        return [0.5, 1, 0, 0, 0];
    },
    DESC: '英雄所有的傷害全部變為魔法傷害，並將“攻擊”的50%增加到“智力”上'
},{
    NAME: '暗之領域',
    TYPE: ['亞修拉姆'],
    DESC: '周圍3格以內的所有敵軍部隊“攻擊”“防禦”降低10%，“遭受暴擊率”增加10%'
},{
    NAME: '風之纏繞',
    TYPE: ['露娜'],
    SKILLTYPE: ['SUB', 'MIDSUB'],
    SUB: function(side){
        return [1.5, 0, 0, 1, 0];
    },
    MIDSUB: function(side){
        return [1.5, 0, 0, 1, 0];
    },
    DESC: '將自身的“魔防”的1.5倍代替“攻擊”'
},{
    NAME: '高階風之纏繞',
    TYPE: ['露娜'],
    SKILLTYPE: ['SUB', 'MIDSUB'],
    SUB: function(side){
        return [1.5, 0, 0, 1, 0];
    },
    MIDSUB: function(side){
        return [1.5, 0, 0, 1, 0];
    },
    DESC: '將自身的“魔防”的1.5倍代替“攻擊”（該效果無法被驅散）'
},{
//可能要增加輸入欄位
    NAME: '聖靈的守護',
    TYPE: ['阿卡婭'],
    DESC: '狼魂生命以外全部屬性的20%附加於阿卡婭'
},{
    NAME: '西卡之血(智力)',
    TYPE: ['阿卡婭'],
    INT: 0.5,
    DESC: '智力+50%'
},{
    NAME: '西卡之血(攻擊)',
    TYPE: ['阿卡婭'],
    ATK: 0.5,
    DESC: '攻擊+50%'
},{
    NAME: '魔衛',
    TYPE: ['妮絲蒂爾'],
    DESC: '被2格距離的遠程魔法攻擊時，可以進行反擊。'
},{
    NAME: '光之少女',
    TYPE: ['艾絲蒂爾'],
    ATK: 0.15, DEF: 0.15,
    DESC: '攻擊、防禦提升15%，護衛範圍提升至2格'
},{
    NAME: '[金剛]',
    TYPE: ['艾絲蒂爾'],
    DMGINC: 0.1,
    SKILLTYPE: ['ADD', 'MIDADD'],
    ADD: function(side){
        return [0.1, 0, 1, 0, 0];
    },
    MIDADD: function(side){
        return [0.1, 0, 1, 0, 0];
    },
    DESC: '造成的所有傷害提升10%，並將“攻擊”的10%增加到“防禦”上。'
},{
    NAME: '寒冰領域',
    TYPE: ['伊露希亞'],
    DESC: '[指揮]周圍2格範圍內的所有敵軍所處地形視為“水中”，且無法觸發再行動'
},{
    NAME: '肉體強化',
    TYPE: ['戶愚呂兄弟'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09, 0.10, 0.11, 0.12, 0.13, 0.14, 0.15], MAX: 15,
    ATK: 0.02, DEX: 0.02,
    DESC: '攻擊、技巧提升2%，可以累積，最多可以累積15個。(當前[DATA]個)'
},{
//不知道是幾個強化，沒人有=w=
    NAME: '120％',
    TYPE: ['戶愚呂兄弟'],
    ATK: 0.2, INT: 0.2, DEF: 0.2, MDEF: 0.2,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        run = combat.run;
        switch(run){
            case 0:
                return false
            case 1:
                return [0.05, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            case 2:
                return [0.10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            default:
                return [0.15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
    },
    DESC: '除生命以外全屬性提升20%（無法與超絕強化疊加）；攻擊前每移動1格，攻擊提升5%。（最多提升15%）；可以抵擋一次致命傷害，並且生命值恢復20%。（效果持續期間最多觸發1次）；攻擊後可以再次移動5格'
},{
    NAME: '戰鬥意志',
    TYPE: ['戶愚呂兄弟'],
    DESC: '進入戰鬥前，恢復英雄攻擊1倍的生命值，如果處於[120%]狀態下恢復量則提升為攻擊的1.5倍'
},{
    NAME: '身輕如燕',
    TYPE: ['燕'], ACC: true,
    DATA: [0, 0.01, 0.02], MAX: 2,
    MOVE: 1,
    DESC: '移動力+1，可疊加2層(當前[DATA]層)'
},{
    NAME: '隱匿',
    TYPE: ['燕'],
    DESC: '無法被敵軍普通攻擊及技能鎖定為目標（不可驅散，遭受傷害或造成傷害後，或相鄰1格範圍內有敵軍時，該效果失效）'
},{
    NAME: '潛行',
    TYPE: ['澤瑞達'],
    CRITRATEINC: 0.3, DMGDEC: 0.3,
    CRITDMGINC: 0.3, MOVE: 4,
    DESC: '暴擊率、暴擊傷害提升30%，遭受傷害降低30%，移動力提升4'
},{
    NAME: '嗜血魔劍',
    TYPE: ['澤瑞達'],
    ODMGINC: 0.3,
    DESC: '士兵無法遭受治療。主動攻擊進入戰鬥時，傷害提升30%且免疫所有弱化效果；並在攻擊後，恢復造成傷害的50%的生命值'
},{
    NAME: '神衛',
    TYPE: ['雷丁'],
    SKILLTYPE: ['SUB', 'MIDSUB'],
    SUB: function(side){
        return [2, 0, 1, 1, 0];
    },
    MIDSUB: function(side){
        return [2, 0, 1, 1, 0];
    },
    DESC: '用“魔防”+“防禦”的1倍代替攻擊'
},{
    NAME: '高階神衛',
    TYPE: ['雷丁'],
    SKILLTYPE: ['SUB', 'MIDSUB'],
    SUB: function(side){
        return [2, 0, 1, 1, 0];
    },
    MIDSUB: function(side){
        return [2, 0, 1, 1, 0];
    },
    DESC: '用“魔防”+“防禦”的1倍代替攻擊(該效果無法被驅散)'
},{
    NAME: '[正義對決]',
    TYPE: ['雷丁'],
    DESC: '相鄰1格的所有敵軍“移動力降低3，且無法進行護衛'
},{
    NAME: '居合一閃',
    TYPE: ['真宮寺櫻'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03, 0.04], MAX: 4,
    ATK: 0.1, INT: 0.1,DEF: 0.1, MDEF: 0.1, DEX: 0.1,
    DESC: '除生命以外全屬性提升10%，可以累積，最高可以累積4層。(當前[DATA]層)'
},{
    NAME: '[迎頭痛擊]',
    TYPE: ['艾爾文','SP艾爾文','布琳達'],
    SKILLTYPE: ['ADD', 'MIDADD'],
    ADD: function(side){
        return [0.2, 0, 1, 0, 0];
    },
    MIDADD: function(side){
        return [0.2, 0, 1, 0, 0];
    },
    DESC: '攻擊”的20%增加到“防禦”上'
},{
    NAME: '孤芳永生',
    TYPE: ['希琳卡'],
    DMGDEC: 0.2, DMGINC: 0.2,
    DESC: '傷害提升20%，遭受傷害降低20%'
},{
    NAME: '絕殺',
    TYPE: ['希琳卡'],
    DESC: '主動進入戰鬥前，如果目標周圍1格內有一名及以上敵軍，此次攻擊直接攻擊敵方英雄'
},{
    NAME: '瞬身',
    TYPE: ['萊恩哈特'],
    DMGDEC: 0.3, MOVE: 1,
    DESC: '移動力+1，自身部隊遭受傷害降低30%'
},{
    NAME: '[劍氣]',
    TYPE: ['萊恩哈特'],
    DESC: '主動戰鬥後，對周圍1圈內的所有敵軍造成0.1倍的範圍傷害。'
},{
    NAME: '灰之騎士',
    TYPE: ['黎恩'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03, 0.04, 0.05], MAX: 5,
    ATK: 0.04, INT: 0.04,DEF: 0.04, MDEF: 0.04, DEX: 0.04,
    DESC: '除生命以外全屬性提升4%，可以累積，最高可以累積5個(當前[DATA]個)'
},{
    NAME: '鬼人',
    TYPE: ['黎恩'],
    DMGDEC: 0.3, DMGINC: 0.3, MOVE: 1,
    DESC: '傷害提升30%，遭受傷害降低30%，移動力+1，並在對敵方部隊造成傷害後，對其施加1個隨機的弱化效果'
},{
    NAME: '掠陣',
    TYPE: ['阿雷斯'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03, 0.04, 0.05], MAX: 5,
    CRITRATEINC: 0.08,
    DESC: '暴擊率提升8%，可累積，最高累積5個。(當前[DATA]個)'
},{
    NAME: '無畏颶風',
    TYPE: ['阿雷斯'],
    DESC: '造成傷害後，將自身周圍2圈內的所有敵軍傳送到自己身邊，並造成1圈0.15倍的範圍傷害；如果部隊具有[掠陣]效果，則可以再次移動4格'
},{
    NAME: '[乘風]',
    TYPE: ['阿雷斯'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        run = combat.run;
        if(run == 0) return false;
        else if(run >= 5) return [0, 0, 0, 0, 0, 0, 0, 0.25, 0, 0, 0];
        else return [0, 0, 0, 0, 0, 0, 0, run*0.05, 0, 0, 0];
    },
    DESC: '攻擊前每移動1格，造成傷害提升5%（最多25%）。'
},{
    NAME: '異星之力',
    TYPE: ['雷因法魯斯'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07], MAX: 7,
    ATK: 0.04, INT: 0.04,DEF: 0.04, MDEF: 0.04, DEX: 0.04,
    DESC: '除生命以外全屬性提升4%，可累積，最高可以累積7個。(當前[DATA]個)'
},{
    NAME: '遊俠之心',
    TYPE: ['西格瑪'],
    DESC: '自己所處的地形視為“樹林”'
},{
/*
//沒宰相不確定
    NAME: '急行',
    TYPE: ['一般'],
    DESC: '移動力提升'
},{
    NAME: '重集軍伍',
    TYPE: ['一般'],
    DESC: '戰後士兵恢復30%生命值'
},{
*/
    NAME: '不歸之森的妖精',
    TYPE: ['蒂德莉特'], offINDEX: 1, defINDEX: 1,
    DATA: [0, 0.08, 0.16, 0.24], MAX: 3,
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense')
            return [0, this.DATA[this.offINDEX], this.DATA[this.offINDEX], 0, 0];
        if(side == 'defense')
            return [0, this.DATA[this.defINDEX], this.DATA[this.defINDEX], 0, 0];
    },
    DESC: '智力、防禦提升8%~24%(當前[DATA]%)'
},{
    NAME: '精靈之森',
    TYPE: ['蒂德莉特'],
    DESC: '[指揮]周圍2格內所有友軍移動時所有可以通過的地形都視為“樹林”。且部隊不會受到地形導致的移動力下降影響，並在行動結束時，恢復30%生命'
},{
    NAME: '[精靈之舞]',
    TYPE: ['蒂德莉特'],
    DESC: '“移動時所有可以通過的地形都視為“樹林”，且部隊不會受到地形導致的移動力下降影響，並在行動結束時，恢復30%生命”'
},{
    NAME: '鋼之聖女',
    TYPE: ['雅里安洛德'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03], MAX: 3,
    ATK: 0.05, DMGDEC: 0.05, DMGINC: 0.05,
    DESC: '攻擊提升5%，傷害提升5%，遭受傷害降低5%，移動力+1，最高可以累積3個。(當前[DATA]個)'
},{
    NAME: '物理屏障',
    TYPE: ['雅里安洛德', '夏提雅'],
    SKILLTYPE: ['MIDRATE'], offINDEX: 1, defINDEX: 1,
    DATA: [0, 0.7, 0.9], MAX: 2,
    MIDRATE: function(side){
        if(side == 'offense'){
            oppDMGTYPE = combat.defDMGTYPE;
            if(oppDMGTYPE == '物理傷害')
                return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this.DATA[this.offINDEX]];
        }
        else if(side == 'defense'){
            oppDMGTYPE = combat.offDMGTYPE;
            if(oppDMGTYPE == '物理傷害')
                return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this.DATA[this.defINDEX]];
        }
        else return false;
    },
    DESC: '受到第1次物理傷害時，遭受傷害降低[DATA]%'
},{
    NAME: '魔法屏障',
    TYPE: ['雅里安洛德'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppDMGTYPE = combat.defDMGTYPE;
        else if(side == 'defense') oppDMGTYPE = combat.offDMGTYPE;
        if(oppDMGTYPE == '魔法傷害') return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9];
        else return false;
    },
    DESC: '受到第1次魔法傷害時，遭受傷害降低90%'
},{
    NAME: '涅槃',
    TYPE: ['神崎堇'],
    DESC: '抵擋一次致命傷害，之後英雄生命值恢復10%，該狀態持續期間最多觸發一次復活效果'
},{
    NAME: '飛龍之舞',
    TYPE: ['神崎堇'],
    /* FIRST ATTACK */
    DESC: '部隊普通攻擊射程+1；進入戰鬥前，如果自身技巧高於敵軍，會先於敵軍進行攻擊'
},{
    NAME: '聖衛',
    TYPE: ['艾米莉亞'],
    /* RANGE DEFENSE ATTACK */
    SKILLTYPE: ['SUB', 'MIDSUB'],
    SUB: function(side){
        return [1.6, 0, 0, 1, 0];
    },
    MIDSUB: function(side){
        return [1.6, 0, 0, 1, 0];
    },
    DESC: '用“魔防”的1.6倍來代替“攻擊”，可以反擊2格的遠程攻擊'
},{
//需要測測看是不是強化
    NAME: '勇將的神力',
    TYPE: ['艾米莉亞'],
    /* DATA? */
    DESC: '部隊血量越高時，減少遭受物理傷害越多，最多減少30% '
},{
    NAME: '天禦聖境',
    TYPE: ['艾米莉亞'],
    DESC: '周圍3格以內的所有友軍部隊遭受暴擊傷害降低30%，遭受固定傷害降低20%。'
},{
    NAME: '神威(光環)',
    TYPE: ['尤莉婭'],
    DESC: '使自身周圍2格所有敵軍“移動力降低3，且無法進行護衛”'
},{
    NAME: '神威(固傷)',
    TYPE: ['尤莉婭'],
    DESC: '進入戰鬥前，對敵軍造成自身智力2倍的[固定傷害]，並恢復自身智力2倍的生命'
},{
    NAME: '野獸震懾(加攻)',
    TYPE: ['古巨拉'],
    SKILLTYPE: ['ADD', 'MIDADD'],
    ADD: function(side){
        return [1, 0, 0.4, 0.4, 0];
    },
    MIDADD: function(side){
        return [1, 0, 0.4, 0.4, 0];
    },
    DESC: '將“魔防”和“防禦” 40%增加到“攻擊”上'
},{
    NAME: '野獸震懾(光環)',
    TYPE: ['古巨拉'],
    DESC: '相鄰1格的所有敵軍“無法移動且不能護衛”'
},{
    NAME: '巨龍屏障(魔防轉攻)',
    TYPE: ['古巨拉'],
    SKILLTYPE: ['SUB', 'MIDSUB'],
    SUB: function(side){
        return [1.4, 0, 0, 1, 0];
    },
    MIDSUB: function(side){
        return [1.4, 0, 0, 1, 0];
    },
    DESC: '用“魔防”的1.4倍代替“攻擊”'
},{
    NAME: '巨龍屏障(光環)',
    TYPE: ['古巨拉'],
    DESC: '周圍2格內的所有友軍免疫“固定傷害”'
},{
    NAME: '魔神降臨',
    TYPE: ['麗可麗絲'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense')
            return [0, 0, 0, 0, 0, 0, 0, combat.offHEAL-1, 0, 0, 0];
        if(side == 'defense')
            return [0, 0, 0, 0, 0, 0, 0, combat.defHEAL-1, 0, 0, 0];
    },
    DESC: '使自身所有「治療量增加」效果代替「造成傷害增加」效果，並進入[魔神降臨]狀態：「在該狀態下施加的[生命之息]變為[黑暗之息]：“當敵軍單位移動至其上，在行動結束時獲得1個隨機弱化效果，並受到一次[固定傷害]傷害數值為麗可麗絲智力的1.2倍。」'
},{
    NAME: '憤怒',
    TYPE: ['浦飯幽助'],
    ATK: 0.1, INT: 0.1,DEF: 0.1, MDEF: 0.1, DEX: 0.1, MOVE: 1,
    DESC: '除生命以外全屬性提升10%，移動力+1，部隊射程+1'
},{
    NAME: '爆發',
    TYPE: ['浦飯幽助'],
    ODMGINC: 0.3, ODMGDEC: 0, MOVE: 1,
    DESC: '移動力+1，主動攻擊時，傷害提升30%'
},{
    NAME: '魔人',
    TYPE: ['浦飯幽助'],
    DESC: '戰後可恢復生命，恢復量為部隊造成傷害的30%的生命'
},{
    NAME: '神鎧',
    TYPE: ['雅兒貝德'], offINDEX: 1, defINDEX: 1,
    DATA: [0, 0, 1], MAX: 2,
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense' && this.defINDEX == 2)
            return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5];
        else return false;
    },
    /* PROBABILITY SKILL */
    CRITRATEDEC: 0.3,
    DESC: '遭受暴擊率降低30%，被攻擊進入戰鬥時30%概率觸發，部隊受到所有傷害降低50%(無法免疫不可驅散)(當前概率[DATA]%)'
},{
    NAME: '魔力精隨',
    TYPE: ['安茲‧烏爾‧恭'],
    ATK: 0.1, INT: 0.1,
    DESC: '[魔力精隨]攻擊、智力提升10%'
},{
    NAME: '穿透提升',
    TYPE: ['安茲‧烏爾‧恭'],
    MDEFNEG: 0.1,
    DESC: '[穿透提升]無視敵方10%魔防'
},{
    NAME: '魔法增幅',
    TYPE: ['安茲‧烏爾‧恭'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') dmgtype = combat.offDMGTYPE;
        if(side == 'defense') dmgtype = combat.defDMGTYPE;
        if(dmgtype == '魔法傷害') return [0, 0, 0, 0, 0, 0, 0, 0.1, 0, 0, 0];
        else return false;
    },
    DESC: '[魔法增幅]魔法傷害提升10%'
},{
    NAME: '暴擊強化',
    TYPE: ['安茲‧烏爾‧恭'],
    CRITRATEINC: 0.1,
    DESC: '[暴擊強化]暴擊機率提升10%'
},{
    NAME: '高階硬化',
    TYPE: ['安茲‧烏爾‧恭'],
    DEF: 0.1, MDEF: 0.1,
    DESC: '[高階硬化]防禦、魔防提升10%'
},{
    NAME: '全屬性強化',
    TYPE: ['安茲‧烏爾‧恭'],
    ATK: 0.05, INT: 0.05, DEF: 0.05, MDEF: 0.05, DEX: 0.05,
    DESC: '[全屬性強化]除生命以外全屬性提升5%'
},{
    NAME: '高階抗性',
    TYPE: ['安茲‧烏爾‧恭'],
    DMGDEC: 0.1,
    DESC: '[高階抗性]遭受所有傷害降低10%'
},{
    NAME: '高階幸運',
    TYPE: ['安茲‧烏爾‧恭'],
    CRITRATEDEC: 0.15,
    DESC: '[高階硬化]遭受暴擊率降低15%'
},{
    NAME: '生命精隨',
    TYPE: ['安茲‧烏爾‧恭'],
    DESC: '[生命精隨]行動結束時恢復20%生命'
},{
    NAME: '飛行',
    TYPE: ['安茲‧烏爾‧恭'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') combat.offMOVETYPE = '飛行';
        if(side == 'defense') combat.defMOVETYPE = '飛行';
    },
    DESC: '[飛行]移動力+1,部隊的移動方式變為「飛行」'
},{
    NAME: '不死之身',
    TYPE: ['安茲‧烏爾‧恭'],
    DESC: '[不死之身]部隊最大生命增加15%'
},{
    NAME: '愛的聲援(buff)',
    MOVE: 1,
    TYPE: ['一般'],
    DESC: '移動力+1'
},{
    NAME: '光之啟源(buff)',
    TYPE: ['路因'], ACC: true,
    DATA: [0, 0.01, 0.02], MAX: 2,
    ATK: 0.15, DEF: 0.15,
    DESC: '攻擊、防禦提升15%，最高累積2層(當前[DATA]層)'
},{
    NAME: '薔薇之陣',
    TYPE: ['SP芙蕾雅','芙蕾雅'],
    DESC: '戰鬥結束後，必定觸發[晶刺]的[固定傷害]'
},{
    NAME: '孤毅',
    TYPE: ['SP艾爾文','艾爾文'],
    DESC: '被攻擊戰鬥前恢復30%生命值，且戰鬥後恢復部隊造成傷害的30%的生命值'
},{
    NAME: '傳說之耀',
    TYPE: ['SP艾爾文','艾爾文'],
    DESC: '艾爾文專屬裝備效果觸發幾率變為100%'
},{
    NAME: '戒律',
    TYPE: ['瑪麗埃爾'],
    HEAL: 0.5, DMGDEC: 0.25, DMGINC: -0.5,
    DESC: '治療量提升50%，遭受所有傷害降低25%，造成傷害降低50%'
},{
    NAME: '聖怒',
    TYPE: ['瑪麗埃爾'],
    DMGINC: 0.2,
    DESC: '造成傷害提升20%，攻擊時無視護衛，使用技能造成傷害後使自身所有技能冷卻時間減少3回合（[聖怒]效果無法免疫和驅散）'
},{
    NAME: '炙炎',
    TYPE: ['克洛泰爾'],
    DESC: '主動攻擊造成傷害後，額外造成1次[固定傷害]，傷害值為克洛泰爾"智力"+"攻擊"的1倍'
},{
    NAME: '炎晶術',
    TYPE: ['克洛泰爾'],
    SKILLTYPE: ['ADD', 'MIDADD'],
    ADD: function(side){
        return [1, 0.15, 0, 0, 0];
    },
    MIDADD: function(side){
        return [1, 0.15, 0, 0, 0];
    },
    DESC: '將"攻擊"的15%增加到"智力"上'
},{
    NAME: '水晶屏障',
    TYPE: ['一般'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03, 0.04, 0.05], MAX: 5,
    DESC: '免疫下1個遭受的弱化效果，可累積，最高可以累積5層，不可驅散。(當前[DATA]層)'
},{
    NAME: '晶愈',
    TYPE: ['一般'],
    DESC: '被攻擊受到傷害後恢復羅澤希爾1.5倍智力的生命'
},{
    NAME: '水晶結印',
    TYPE: ['羅澤希爾'],
    HEAL: 0.2, DMGDEC: 0.2,
    DESC: '無法攻擊、移動、被位移和使用技能，治療量提升20%，遭受傷害降低20%，天賦的指揮效果範圍+1，抵擋一次致命傷害。行動結束時，恢復自身天賦範圍內其他友軍生命，恢復量為羅澤希爾智力的2倍，並附加2層[水晶屏障]'
},{
    NAME: '威光',
    TYPE: ['降生之光'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03, 0.04], MAX: 4,
    INT: 0.05,
    DESC: '智力提升5%，可累積，最高可以累積4個，無法驅散。自身每擁有2個[威光]，部隊射程+1。 (當前[DATA]層)'
},{
    NAME: '越野',
    TYPE: ['一般'],
    DESC: '通過防禦地形時，部隊可以獲得1格免除移動力降低的機會'
},{
    NAME: '機動變形',
    TYPE: ['沃爾納'], ACC: true,
    DATA: [0, 0.01, 0.02, 0.03], MAX: 3,
    ATK: 0.05, INT: 0.05, DEF: 0.05, MDEF: 0.05, DEX: 0.05, MOVE: 1,
    DESC: '移動力+1，除生命以外全屬性+5%，可累積，最高累積3層，無法驅散。(當前[DATA]層)'
},{
    NAME: '急速型態',
    TYPE: ['沃爾納'],
    DESC: '使自身部隊移動力提升3，進入戰鬥前移動大於或等於4格時會先於敵軍進行攻擊。'
},{
    NAME: '強襲型態',
    TYPE: ['沃爾納'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        run = combat.run;
        if(run == 0) return false;
        else if(run >= 5) return [0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0];
        else return [0, 0, 0, 0, 0, 0, 0, run*0.03, 0, 0, 0];
    },
    DESC: '使自身部隊攻擊前每移動1格，傷害提升3%（最大15%）'
},{
    NAME: '防禦型態',
    TYPE: ['沃爾納'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense'){
            return [0, 0, 0, 0, 0, 0, 0, 0.2, 0, 0, 0.15];
        }
        else return [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.15];
    },
    DESC: '使自身部隊遭受傷害降低15%，無法被位移，反擊傷害提升20%，行動結束時，恢復自身部隊35%生命。'
},{
    NAME: '號令‧槍御',
    TYPE: ['希爾達'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        run = combat.run;
        if(run == 0 || side == 'offense') return false;
        else if(run >= 5) return [0, 0, 0, 0, 0, 0, 0, 0.50, 0, 0, 0];
        else return [0, 0, 0, 0, 0, 0, 0, run*0.10, 0, 0, 0];
    },
    DESC: '[槍御]被攻擊進入戰鬥前，敵軍每移動一格則使其遭受傷害提升10%（最大50%）'
},{
    NAME: '槍御',
    TYPE: ['希爾達'],
    DESC: '[槍御]自身英雄兵種變為[槍兵]'
},{
    NAME: '號令‧騎沖',
    TYPE: ['希爾達'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppSoldArmy = combat.defSoldier.ARMY;
        else if(side == 'defense') oppSoldArmy = combat.offSoldier.ARMY;
        if(oppSoldArmy != '步兵') return false;
        else return [0, 0, 0, 0, 0, 0, 0, 0.20, 0, 0, 0];
    },
    DESC: '[騎沖]對戰步兵傷害額外提升20%'
},{
    NAME: '騎沖',
    TYPE: ['希爾達'],
    DESC: '[騎沖]自身英雄兵種變為[騎兵]'
/*             */
/* 超絕 分割線 */
/*             */
},{
    NAME: '光之傳承',
    TYPE: ['主角光環'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') friend = combat.off2BFriend;
        else if(side == 'defense') friend = combat.def2BFriend;
        if(friend == 0) return false;
        else return [0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0];
    },
    DESC: '周圍2格內有友軍時，戰鬥中造成傷害提升15%。'
},{
    NAME: '正義的裁決',
    TYPE: ['光輝軍團'],
    DDMGINC: 0.2,
    DESC: '被攻擊時，傷害額外提升20%。'
},{
    NAME: '不滅的輝光',
    TYPE: ['光輝軍團'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        else if(side == 'defense') perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(perHP > 0.8) return [0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0];
        else return false;
    },
    DESC: '生命80%以上時，戰鬥中造成傷害提升15%'
},{
    NAME: '聖獸印記',
    TYPE: ['光之起源'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        offPerHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        defPerHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(side == 'offense') perHP = offPerHP, oppPerHP = defPerHP
        else if(side == 'defense') perHP = defPerHP, oppPerHP = offPerHP;
        if(perHP > oppPerHP) return [0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0];
        else return false;
    },
    DESC: '部隊生命百分比高於敵軍時，主動攻擊進入戰鬥時，造成傷害提升15%。'
},{
    NAME: '希望之光',
    TYPE: ['光之起源'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') buffNUM = combat.offBUFFLIST.length;
        else if(side == 'defense') buffNUM = combat.defBUFFLIST.length;
        if(buffNUM >= 5) return [0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0];
        else return false;
    },
    DESC: '本部隊有5個以上的強化效果時，戰鬥中造成傷害提升15%。持續4回合。'
},{
    NAME: '帝國衝鋒',
    TYPE: ['帝國之輝'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        run = combat.run;
        if(run == 0) return false;
        else if(run >= 3) return [0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0];
        else return [0, 0, 0, 0, 0, 0, 0, 0.05*run, 0, 0, 0];
    },
    DESC: '攻擊前每移動1格，造成傷害提升5%（最多15%）。'
},{
    NAME: '帝國之力',
    TYPE: ['帝國之輝'],
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') otherside = 'defense';
        else if(side == 'defense') otherside = 'offense';
        counterRate = cal_counter(getNewArmy(side), getNewArmy(otherside));
        if(counterRate > 0) this.COUNTER = 0.1;
        else this.COUNTER = undefined;
    },
    DESC: '與克制的部隊交戰時，傷害額外提升20%(克制倍率+10%)'
},{
    NAME: '帝國晶燦',
    TYPE: ['帝國之輝'],
    ODMGINC: 0.12,
    DESC: '主動攻擊進入戰鬥時傷害提升12%，被攻擊進入戰鬥前驅散敵軍1個強化效果。'
},{
    NAME: '暗之輪舞',
    TYPE: ['黑暗輪迴'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') oppDebuffNUM = combat.defDEBUFFLIST.length;
        else if(side == 'defense') oppDebuffNUM = combat.offDEBUFFLIST.length;
        if(oppDebuffNUM >= 5) return [0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0];
        else return false;
    },
    DESC: '戰鬥中，如果敵軍身上有3個以上的弱化效果，本部隊造成傷害提升15%。'
},{
    NAME: '黑暗之力',
    TYPE: ['黑暗輪迴'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') skillCD = combat.offSkill.CD;
        else if(side == 'defense') skillCD = combat.defSkill.CD;
        if(skillCD >= 7) return [0, 0, 0, 0, 0, 0, 0, 0.2, 0, 0, 0];
        else return [0, 0, 0, 0, 0, 0, 0, 0.03*skillCD, 0, 0, 0];
    },
    DESC: '使用技能時，依據其冷卻時間獲得傷害增加效果，每多1回合冷卻時間，則傷害提升3% (最多提升20% )'
},{
    NAME: '天煌聖女',
    TYPE: ['公主聯盟','海恩'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') skillName = combat.offSkill.NAME;
        else if(side == 'defense') skillName = combat.defSkill.NAME;
        if(skillName != '普攻(物)' && skillName != '普攻(法)')
            return [0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0];
        else return false;
    },
    DESC: '使用技能時，傷害提升12%'
},{
    NAME: '王女降臨',
    TYPE: ['公主聯盟','海恩'],
    /* TRUE DMG */
    DESC: '主動對敵軍造成傷害後，可以額外追加一次[固定傷害]，傷害數值為敵軍剩餘生命的15%'
},{
    NAME: '王牌戰法',
    TYPE: ['戰略大師'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') army = getNewArmy('offense'), soldArmy = combat.offSoldier.ARMY;
        else if(side == 'defense') army = getNewArmy('defense'), soldArmy = combat.defSoldier.ARMY;
        if(army != soldArmy) return [0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0];
        else return false;
    },
    DESC: '如果自己是[混合部隊]（英雄與士兵兵種不同），戰鬥中傷害額外提升15%。'
},{
    NAME: '戰場大師',
    TYPE: ['戰略大師'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense'){
            terrainRate = combat.offTerrainRate;
            combat.offMOVETYPE = '野戰';
        }
        else if(side == 'defense'){
            terrainRate = combat.defTerrainRate;
            combat.defMOVETYPE = '野戰';
        }
        if(terrainRate > 1) return [0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0];
        else return false;
    },
    DESC: '移動時所有可通過地形都視為“平地”。所在地形如果有防禦提升效果，則戰鬥中造成傷害提升15%。'
},{
    NAME: '一擊絕塵',
    TYPE: ['流星直擊'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') friend = combat.off1BFriend;
        else if(side == 'defense') friend = combat.def1BFriend;
        if(friend == 0) return [0, 0, 0, 0, 0, 0, 0, 0.10, 0, 0, 0];
        else return false;
    },
    DESC: '周圍1格沒有友軍時，傷害提升10%，且擊殺敵軍後，可以獲得再次移動2格的機會，並在行動結束時恢復20%生命。'
},{
    NAME: '璀璨的傳說',
    TYPE: ['傳說彼端'],
    SKILLTYPE: ['RATE'],
    RATE: function(side){
        if(side == 'offense') otherside = 'defense';
        else if(side == 'defense') otherside = 'offense';
        counterRate = cal_counter(getNewArmy(side), getNewArmy(otherside));
        if(counterRate == 0) this.COUNTER = 0.08;
        else this.COUNTER = undefined;
    },
    DESC: '與不發生剋制關係的部隊交戰時，傷害額外提升15%(克制倍率+8%)'
},{
    NAME: '傳說的終焉',
    TYPE: ['傳說彼端'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') perHP = (combat.offHP+combat.offsoldHP)/(combat.offFULLHP+combat.offsoldFULLHP);
        else if(side == 'defense') perHP = (combat.defHP+combat.defsoldHP)/(combat.defFULLHP+combat.defsoldFULLHP);
        if(perHP <= 0.8) return [0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0];
        else return false;
    },
    DESC: '生命80%以下時，傷害提升15%'
},{
    NAME: '星之所在',
    TYPE: ['時空樞紐'],
    AOEDMGINC: 0.2,
    DESC: '範圍技能傷害提升20%'
},{
    NAME: '魔強一統',
    TYPE: ['時空樞紐'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') skillName = combat.offSkill.NAME;
        else if(side == 'defense') skillName = combat.defSkill.NAME;
        if(skillName != '普攻(物)' && skillName != '普攻(法)')
            return [0, 0, 0, 0, 0, 0, 0, 0.15, 0, 0, 0];
        else return false;
    },
    DESC: '使用單體技能時，傷害提升15%'
},{
    NAME: '超凡具現',
    TYPE: ['超凡領域'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        range = combat.range;
        if(range > 1) return [0, 0, 0, 0, 0, 0, 0, 0.12, 0, 0, 0];
        else return false;
    },
    DESC: '遠程傷害提升12%；在行動結束時，如果未造成過傷害，驅散自身1個弱化效果。'
},{
    NAME: '終焉葬歌',
    TYPE: ['超凡領域'],
    DESC: '在一回合內主動擊殺敵軍後，自身所有技能冷卻時間減少1回合；自身死亡時，令所有友軍技能冷卻時間減少1回合。'
},{
    NAME: '轉生的預言',
    TYPE: ['夢幻轉生'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'offense') enemy = combat.off3BEnemy;
        else if(side == 'defense') enemy = combat.def3BEnemy;
        if(enemy == 0) return false;
        else if(enemy >= 4) return [0, 0, 0, 0, 0, 0, 0, 0.2, 0, 0, 0];
        else return [0, 0, 0, 0, 0, 0, 0, 0.05*enemy, 0, 0, 0];
    },
    DESC: '周圍3格內每有1名敵軍時，造成傷害提升5%（最高提升20%）'
},{
    NAME: '轉生的決意',
    TYPE: ['夢幻轉生'],
    SKILLTYPE: ['MIDRATE'],
    MIDRATE: function(side){
        if(side == 'defense'){
            this.SKILLDMG = undefined;
            return [0, 0, 0, 0, 0, 0, 0, 0.12, 0, 0, 0];
        }
        else if(side == 'offense' && combat.offSkill.NAME != "普攻(物)" && combat.offSkill.NAME != "普攻(法)"){
            this.SKILLDMG = 0.12;
            return false;
        }
        else this.SKILLDMG = undefined;
    },
    DESC: '單體技能傷害提升12%，反擊傷害提升12%'
}];

