/*** Created by Wei.yb on 2018/07. ***/
// 字母分组城市选择（基于jquery）
// * 城市数据结构为 ['中文名|全拼|简拼|id']
function SmeChooseCity($dom, hotCities) {
    this.$wrap = $dom;
    this.allCities = ['阿坝州|abazhou|abz|2914', '安康市|ankangshi|aks|2720', '阿克苏地区|akesudiqu|aksdq|3106', '阿里地区|alidiqu|aldq|3056', '阿拉善盟|alashanmeng|alsm|2227', '阿勒泰地区|aletaidiqu|altdq|3178', '安庆市|anqingshi|aqs|3461', '鞍山市|anshanshi|ass|2028', '安顺市|anshunshi|ass|809', '安阳市|anyangshi|ays|1189', '蚌埠市|bangbushi|bbs|3430', '白城市|baichengshi|bcs|1755', '保定市|baodingshi|bds|1008', '博尔塔拉蒙古自治州|betlmg|betlmgzzz|3154', '北海市|beihaishi|bhs|704', '毕节地区|bijiediqu|bjdq|827', '宝鸡市|baojishi|bjs|2634', '北京市|beijingshib|bjs|192', '白山市|baishanshi|bss|1742', '保山市|baoshanshi|bss|3228', '百色市|baiseshi|bss|732', '白沙县|baishaxian|bsx|905', '包头市|baotoushi|bts|2128', '保亭县|baotingxian|btx|913', '本溪市|benwushi|bxs|2044', '巴音郭楞蒙古自治州|byglmg|byglmgzzz|3135', '巴彦淖尔市|bayannaoershi|bynes|2187', '白银市|baiyinshi|bys|420', '亳州市|bozhoushi|bzs|3519', '滨州市|binzhoushi|bzs|2459', '巴中市|bazhongshi|bzs|2904', '长春市|changchunshi|ccs|1701', '昌都地区|changdudiqu|cddq|2995', '常德市|changdeshi|cds|1625', '承德市|chengdeshi|cds|1052', '成都市|chengdushi|cds|2761', '赤峰市|chifengshi|cfs|2142', '巢湖市|chaohushi|chs|3505', '昌吉回族自治州|cjhz|cjhzzzz|3146', '昌江县|changjiangxian|cjx|907', '澄迈县|chengmaixian|cmx|901', '长沙市|changshashi|css|1562', '楚雄州|chuxiongzhou|cxz|3374', '朝阳市|chaoyangshi|cys|2102', '长治市|changzhishi|czs|2507', '滁州市|chuzhoushi|czs|3481', '沧州市|cangzhoushi|czs|1064', '常州市|changzhoushi|czs|1806', '郴州市|chenzhoushi|czs|1647', '池州市|chizhoushi|czs|3524', '崇左市|chongzuoshi|czs|769', '潮州市|chaozhoushi|czs|636', '定安县|dinganxian|dax|897', '丹东市|dandongshi|dds|2051', '东方市|dongfangshi|dfs|895', '东莞市|dongzuoshi|dgs|632', '德宏州|dehongzhou|dhz|3398', '大连市|dalianshi|dls|2017', '大理州|dalizhou|dlz|3385', '大庆市|daqingshi|dqs|1357', '迪庆州|diqingzhou|dqz|3409', '大同市|datongshi|dts|2489', '大兴安岭地区|daxinganlingdiqu|dxaldq|1432', '定西市|dingwushi|dxs|471', '德阳市|deyangshi|dys|2803', '东营市|dongyingshi|dys|2358', '达州市|dazhoushi|dzs|2880', '德州市|dezhoushi|dzs|2436', '鄂尔多斯市|eerduosishi|eedss|2164', '恩施州|enshizhou|esz|1546', '鄂州市|ezhoushi|ezs|1513', '防城港市|fangchenggang|fcgs|709', '抚顺市|fushunshi|fss|2036', '佛山市|foshanshi|fss|551', '阜新市|fuxinshi|fxs|2073', '阜阳市|fuyangshid|fys|3490', '福州市|fuzhoushi|fzs|208', '抚州市|wuzhoushib|fzs|1977', '广安市|guanganshi|gas|2874', '贵港市|guigangshi|ggs|719', '果洛藏族自治州|guoluocangzu|glczzzz|2293', '桂林市|guilinshi|gls|677', '甘南州|gannanzhou|gnz|498', '固原市|guyuanshi|gys|2249', '广元市|guangyuanshi|gys|2820', '贵阳市|guiyangshi|gys|778', '赣州市|ganzhoushi|gzs|1933', '广州市|guangzhoushi|gzs|508', '甘孜州|ganzizhou|gzz|2928', '淮安市|huaianshi|has|1843', '海北藏族自治州|haibeicangzu|hbczzzz|2277', '鹤壁市|hebishi|hbs|1169', '淮北市|huaibeishi|hbs|3450', '河池市|hechishi|hcs|750', '海东地区|haidongdiqu|hddq|2270', '邯郸市|handanshi|hds|967', '哈尔滨市|haerbinshi|hebs|1290', '合肥市|hefeishi|hfs|3414', '黄冈市|huanggangshi|hgs|1525', '鹤岗市|hegangshi|hgs|1339', '呼和浩特市|huhehaoteshi|hhhts|2118', '黑河市|heiheshi|hhs|1414', '怀化市|huaihuashi|hhs|1671', '红河州|honghezhou|hhz|3356', '海口市|haikoushi|hks|878', '呼伦贝尔市|hulunbeiershi|hlbes|2173', '葫芦岛市|huludaoshi|hlds|2110', '哈密地区|hamidiqu|hmdq|3093', '黄南藏族自治州|huangnancangzu|hnczzzz|2282', '海南藏族自治州|hainancangzu|hnczzzz|2287', '淮南市|huainanshi|hns|3438', '衡水市|hengshuishi|hss|1093', '黄山市|huangshanshi|hss|3473', '黄石市|huangshishi|hss|1455', '和田地区|hetiandiqu|htdq|3097', '海西蒙古族藏族自治州|hxmgzzz|hxmgzczzzz|2307', '衡阳市|hengyangshi|hys|1588', '河源市|heyuanshi|hys|611', '菏泽市|hezeshi|hzs|2467', '汉中市|hanzhongshi|hzs|2695', '贺州市|hezhoushi|hzs|745', '惠州市|huizhoushi|hzs|591', '湖州市|huzhoushi|hzs|13', '杭州市|hangzhoushi|hzs|9', '吉安市|jianshib|jas|1952', '晋城市|jinchengshi|jcs|2523', '金昌市|jinchangshi|jcs|416', '景德镇市|jingdezhenshi|jdzs|1901', '金华市|jinhuashi|jhs|15', '九江市|jiujiangshi|jjs|1913', '吉林市|jilinshi|jls|1712', '江门市|jiangmenshi|jms|557', '荆门市|jingmenshi|jms|1506', '佳木斯市|jiamusishi|jmss|1385', '济南市|jinanshi|jns|2317', '济宁市|jiningshi|jns|2395', '酒泉市|jiuquanshi|jqs|454', '鸡西市|jiwushi|jxs|1329', '嘉兴市|jiaxingshi|jxs|12', '嘉峪关市|jiayuguanshi|jygs|415', '揭阳市|jieyangshi|jys|640', '晋中市|jinzhongshi|jzs|2537', '焦作市|jiaozuoshi|jzs|1158', '锦州市|jinzhoushib|jzs|2058', '荆州市|jingzhoushi|jzs|1482', '开封市|kaifengshi|kfs|1119', '克拉玛依市|kelamayishi|klmys|3083', '昆明市|kunmingshi|kms|3192', '喀什地区|kashidiqu|ksdq|3117', '克孜勒苏柯尔克孜自治州|kzlskekz|kzlskekzzz|3130', '六安市|liuanshi|las|3511', '来宾市|laibinshi|lbs|762', '聊城市|liaochengshi|lcs|2449', '临沧市|lincangshi|lcs|3337', '娄底市|loudishi|lds|1685', '乐东县|ledongxian|ldx|909', '廊坊市|langfangshi|lfs|1081', '临汾市|linfenshi|lfs|2579', '临高县|lingaoxian|lgx|903', '漯河市|xiheshi|lhs|1216', '丽江市|lijiangshi|ljs|3316', '吕梁市|lvliangshi|lls|2599', '陇南市|longnanshi|lns|479', '六盘水市|liupanshuishi|lpss|789', '乐山市|leshanshi|lss|2840', '拉萨市|lasashi|lss|2986', '丽水市|lishuishi|lss|19', '陵水县|lingshuixian|lsx|911', '凉山州|liangshanzhou|lsz|2947', '莱芜市|laiwushib|lws|2420', '临夏州|linxiazhou|lxz|489', '连云港市|lianyungangshi|lygs|1835', '临沂市|linyishi|lys|2423', '辽阳市|liaoyangshi|lys|2081', '辽源市|liaoyuanshi|lys|1729', '龙岩市|longyanshi|lys|387', '洛阳市|luoyangshi|lys|1130', '林芝地区|linzhidiqu|lzdq|3064', '兰州市|lanzhoushi|lzs|406', '柳州市|liuzhoushi|lzs|666', '泸州市|luzhoushi|lzs|2794', '马鞍山市|maanshanshi|mass|3445', '牡丹江市|mudanjiangshi|mdjs|1401', '茂名市|maomingshi|mms|575', '眉山市|meishanshi|mss|2888', '绵阳市|mianyangshi|mys|2810', '梅州市|meizhoushi|mzs|597', '宁波市|ningboshi|nbs|10', '南昌市|nanchangshi|ncs|1891', '南充市|nanchongshi|ncs|2852', '宁德市|ningdeshi|nds|395', '内江市|neijiangshi|njs|2834', '南京市|nanjingshi|njs|1771', '怒江州|nujiangzhou|njz|3404', '南宁市|nanningshi|nns|653', '南平市|nanpingshi|nps|376', '那曲地区|naqudiqu|nqdq|3043', '南通市|nantongshi|nts|1826', '南阳市|nanyangshi|nys|1229', '平顶山市|pingdingshanshi|pdss|1146', '普洱市|puershi|pes|3325', '盘锦市|panjinshi|pjs|2089', '平凉市|pingliangshi|pls|446', '莆田市|putianshi|pts|331', '萍乡市|pingxiangshib|pxs|1907', '濮阳市|xiyangshi|pys|1199', '攀枝花市|panzhihuashi|pzhs|2788', '黔东南州|qiandongnanzhou|qdnz|845', '青岛市|qingdaoshi|qds|2329', '秦皇岛市|qinhuangdaoshi|qhds|958', '琼海市|qionghaishi|qhs|887', '曲靖市|qujingshi|qjs|3207', '黔南州|qiannanzhou|qnz|864', '齐齐哈尔市|qiqihaershi|qqhes|1310', '七台河市|qitaiheshi|qths|1396', '黔西南州|qianwunanzhou|qxnz|836', '清远市|qingyuanshi|qys|623', '庆阳市|qingyangshi|qys|462', '衢州市|xizhoushi|qzs|16', '泉州市|quanzhoushi|qzs|350', '钦州市|qinzhoushi|qzs|714', '琼中县|qiongzhongxian|qzx|915', '日喀则地区|rikazediqu|rkzdq|3023', '日照市|rizhaoshi|rzs|2415', '韶关市|shaoguanshi|sgs|540', '绥化市|suihuashi|shs|1421', '上海市|shanghaishib|shs|2740', '石家庄市|shijiazhuangshi|sjzs|918', '商洛市|shangluoshi|sls|2731', '三明市|sanmingshi|sms|337', '三门峡市|sanmenxiashi|smxs|1222', '山南地区|shannandiqu|sndq|3010', '遂宁市|suiningshi|sns|2828', '四平市|sipingshi|sps|1722', '宿迁市|suqianshi|sqs|1884', '商丘市|shangqiushi|sqs|1243', '上饶市|shangraoshi|srs|1989', '汕头市|shantoushi|sts|532', '汕尾市|shanweishi|sws|606', '绍兴市|shaoxingshi|sxs|14', '邵阳市|shaoyangshi|sys|1602', '十堰市|shiyanshi|sys|1473', '三亚市|sanyashi|sys|883', '松原市|songyuanshi|sys|1749', '沈阳市|shenyangshi|sys|2003', '双鸭山市|shuangyashanshi|syss|1348', '宿州市|suzhoushib|szs|3499', '深圳市|shenzuoshi|szs|521', '朔州市|shuozhoushi|szs|2530', '苏州市|suzhoushi|szs|1814', '随州市|suizhoushi|szs|1543', '石嘴山市|shizuishanshi|szss|2240', '省直辖|shengzhixia|szx|1287', '省直辖|shengzhi|szx|1556', '泰安市|taianshi|tas|2408', '塔城地区|tachengdiqu|tcdq|3170', '铜川市|tongchuanshi|tcs|2629', '屯昌县|tunchangxian|tcx|899', '通化市|tonghuashi|ths|1734', '天津市|tianjingshib|tjs|2966', '吐鲁番地区|tulufandiqu|tlfdq|3089', '铁岭市|tielingshi|tls|2094', '通辽市|tongliaoshi|tls|2155', '铜陵市|tonglingshi|tls|3456', '铜仁地区|tongrendiqu|trdq|816', '唐山市|tangshanshi|tss|943', '天水市|tianshuishi|tss|426', '太原市|taiyuanshi|tys|2478', '泰州市|taizhoushib|tzs|1877', '台州市|taizhoushi|tzs|18', '文昌市|wenchangshi|wcs|891', '潍坊市|weifangshi|wfs|2377', '威海市|weihaishi|whs|2390', '芜湖市|wuhushi|whs|3422', '乌海市|wuhaishi|whs|2138', '武汉市|wuhanshi|whs|1441', '乌兰察布市城县|wulanchabushichengxian|wlcbscx|2195', '乌鲁木齐市|wulumuqishi|wlmqs|3073', '万宁市|wanningshi|wns|893', '渭南市|weinanshi|wns|2662', '文山州|wenshanzhou|wsz|3346', '武威市|wuweishi|wws|434', '无锡市|wuwushi|wxs|1785', '梧州市|wuzhoushi|wzs|695', '吴忠市|wuzhongshi|wzs|2244', '温州市|wenzhoushi|wzs|11', '五指山市|wuzhishanshi|wzss|885', '兴安盟|xinganmeng|xam|2207', '西安市|xianshi|xas|2615', '宣城市|xuanchengshi|xcs|3529', '许昌市|xuchangshi|xcs|1207', '孝感市|xiaoganshi|xgs|1517', '锡林郭勒盟|wulinguolemeng|xlglm|2214', '厦门市|xiamenshi|xms|324', '咸宁市|xianningshi|xns|1536', '西宁市|wuningshi|xns|2260', '西双版纳州|wushuangbannazhou|xsbnz|3370', '邢台市|xingtaishi|xts|988', '湘潭市|xiangtanshi|xts|1582', '新乡市|xinxiangshi|xxs|1175', '湘西州|xiangwuzhou|xxz|1691', '襄阳市|xiangfanshi|xys|1462', '咸阳市|xianyangshi|xys|2647', '新余市|xinyushi|xys|1926', '信阳市|xinyangshi|xys|1254', '徐州市|xuzhoushi|xzs|1794', '忻州市|xinzhoushi|xzs|2563', '雅安市|yaanshi|yas|2895', '延安市|yananshi|yas|2677', '延边朝鲜族自治州|ybcxz|ybcxzzzz|1761', '宜宾市|yibinshi|ybs|2863', '伊春市|yichunshia|ycs|1367', '银川市|yinchuanshi|ycs|2232', '盐城市|yanchengshi|ycs|1852', '宜昌市|yichangshi|ycs|1492', '宜春市|yichunshi|ycs|1966', '运城市|yunchengshi|ycs|2549', '云浮市|yunfushi|yfs|646', '阳江市|yangjiangshi|yjs|618', '营口市|yingkoushi|yks|2066', '伊犁哈萨克自治州|ylhsk|ylhskzzz|3158', '玉林市|yulinshi|yls|725', '榆林市|yulinshib|yls|2707', '洋浦县|yangpuxian|ypx|3538', '阳泉市|yangquanshi|yqs|2501', '玉树藏族自治州|yushucangzu|ysczzzz|2300', '烟台市|yantaishi|yts|2364', '鹰潭市|yingtanshi|yts|1929', '玉溪市|yuwushi|yxs|3218', '益阳市|yiyangshi|yys|1640', '岳阳市|yueyangshi|yys|1615', '永州市|yongzhoushi|yzs|1659', '扬州市|yangzhoushi|yzs|1862', '淄博市|ziboshi|zbs|2342', '自贡市|zigongshi|zgs|2781', '珠海市|zhuhaishi|zhs|528', '张家界市|zhangjiajieshi|zjjs|1635', '张家口市|zhangjiakoushi|zjks|1034', '镇江市|zhenjiangshi|zjs|1870', '湛江市|zhanjiangshi|zjs|565', '周口市|zhoukoushi|zks|1265', '驻马店市|zhumadianshi|zmds|1276', '重庆市|chongqingshi|zqs|158', '肇庆市|zhaoqingshi|zqs|582', '中山市|zhongshanshi|zss|634', '舟山市|zhoushanshi|zss|17', '昭通市|zhaotongshi|zts|3295', '中卫市|zhongweishi|zws|2255', '直辖行政单位|zhixiaxingzhengdanwei|zxxzdw|3186', '张掖市|zhangyeshi|zys|439', '资阳市|ziyangshi|zys|2909', '遵义市|zunyishi|zys|794', '郑州市|zhengzhoushi|zzs|1106', '株洲市|zhuzhoushi|zzs|1572', '儋州市|zuozhoushi|zzs|889', '枣庄市|zaozhuangshi|zzs|2351', '漳州市|zhangzhoushi|zzs|363'];
    this.hotCities = hotCities;
    this.allCityGroup = [
        {title: 'ABCD', group: {}},
        {title: 'EFGH', group: {}},
        {title: 'JKLM', group: {}},
        {title: 'NOPQRS', group: {}},
        {title: 'TUVWX', group: {}},
        {title: 'YZ', group: {}}
    ];
    this.sortLetterArr = [];
    this.choosePanelStr = '<div class="choose-panel">'
        + '<div class="hot-panel"><dl><dt>热门城市：</dt>{{hotCities}}</dl></div>'
        + '<div class="tab-panel"><ul class="tab-nav">{{tabNav}}</ul><div class="tab-content">{{tabContent}}</div></div>'
        + '</div>';
    this.htmlStrObj = {hotCities: '', tabNav: '', tabContent: ''};
    // 调用方法
    this.renderChoosePanel();
    this.handle();
}

// 正则组
SmeChooseCity.prototype.regExp = {
    baseReg: /^([\u4E00-\u9FA5\uf900-\ufa2d]+)\|(\w+)\|(\w)\w*\|([0-9]+)$/i, // 基于数据结构的正则
    chineseReg: /([\u4E00-\u9FA5\uf900-\ufa2d]+)/, // 中文正则
    cityGroupReg: [/^[a-d]$/i, /^[e-h]$/i, /^[j-m]$/i, /^[n-s]$/i, /^[t-x]$/i, /^[y-z]$/i] // 城市分组首字母正则
};
// 城市分组
SmeChooseCity.prototype.grouping = function () {
    var regExp = this.regExp.baseReg,
        groupRegExp = this.regExp.cityGroupReg,
        allCities = this.allCities,
        allCityGroup = this.allCityGroup,
        singleCityData = {},
        sortLetterArr = this.sortLetterArr,
        matchArr,
        letter;
    for (var i = 0; i < allCities.length; i++) {
        matchArr = regExp.exec(allCities[i]);
        letter = matchArr[3].toUpperCase(); // 获取城市首字母并大写
        singleCityData = {
            'cnname': matchArr[1],
            'id': matchArr[4]
        };
        if (sortLetterArr.indexOf(letter) == -1) {
            sortLetterArr.push(letter);
        }
        // 匹配城市首字母归入相应分组
        for (var j = 0; j < groupRegExp.length; j++) {
            if (groupRegExp[j].test(letter)) {
                if (!allCityGroup[j].group[letter]) {
                    allCityGroup[j].group[letter] = [];
                }
                allCityGroup[j].group[letter].push(singleCityData);
            }
        }
    }
    // 字母正序
    sortLetterArr.sort();
};
// 生成全部城市
SmeChooseCity.prototype.createAllGroup = function () {
    var allCityGroup = this.allCityGroup,
        sortLetterArr = this.sortLetterArr,
        navStr = '',
        contentStr = '',
        minLimit = 0,
        maxLimit;
    for (var i = 0; i < allCityGroup.length; i++) {
        maxLimit = minLimit + Object.keys(allCityGroup[i].group).length;
        if (i == 0) {
            navStr += '<li class="current">' + allCityGroup[i].title + '</li>';
            contentStr += '<div class="current tab-content-item">';
        } else {
            navStr += '<li>' + allCityGroup[i].title + '</li>';
            contentStr += '<div class="tab-content-item">';
        }
        for (var j = minLimit; j < maxLimit; j++) {
            for (var key in allCityGroup[i].group) {
                if (key == sortLetterArr[j]) {
                    contentStr += '<dl><dt>'
                        + key
                        + '</dt><dd>';
                    for (var k = 0; k < allCityGroup[i].group[key].length; k++) {
                        contentStr += '<span><a href="javascript:;" data-id="'
                            + allCityGroup[i].group[key][k].id
                            + '" title="'
                            + allCityGroup[i].group[key][k].cnname
                            + '" class="area-option f-ellipsis">'
                            + allCityGroup[i].group[key][k].cnname
                            + '</a></span>';
                    }
                    contentStr += '</dd></dl>';
                }
            }
        }
        contentStr += '</div>';
        minLimit += Object.keys(allCityGroup[i].group).length;
    }
    this.htmlStrObj.tabNav = navStr;
    this.htmlStrObj.tabContent = contentStr;
};
// 生成热门城市
SmeChooseCity.prototype.createHotGroup = function () {
    var hotCities = this.hotCities,
        regExp = this.regExp.baseReg,
        hotStr = '',
        matchArr;
    hotStr += '<dd>';
    for (var i = 0; i < hotCities.length; i++) {
        matchArr = regExp.exec(hotCities[i]);
        hotStr += '<span><a href="javascript:;" data-id="'
            + matchArr[4]
            + '" title="'
            + matchArr[1]
            + '" class="area-option">'
            + matchArr[1]
            + '</a></span>';
    }
    hotStr += '</dd>';
    this.htmlStrObj.hotCities = hotStr;
};
// 渲染选择面板
SmeChooseCity.prototype.renderChoosePanel = function () {
    this.grouping();
    this.createAllGroup();
    this.createHotGroup();
    var $result = this.$wrap.find('.result-panel'),
        panelStr = this.choosePanelStr,
        strObj = this.htmlStrObj;
    panelStr = panelStr.replace('{{hotCities}}', strObj.hotCities);
    panelStr = panelStr.replace('{{tabNav}}', strObj.tabNav);
    panelStr = panelStr.replace('{{tabContent}}', strObj.tabContent);
    $(panelStr).insertAfter($result);
};
// 操作集合
SmeChooseCity.prototype.handle = function () {
    var $wrap = this.$wrap,
        $resultPanel = $wrap.find('.result-panel'),
        $choosePanel = $wrap.find('.choose-panel'),
        $cityOptions = $choosePanel.find('.area-option'),
        $tabNavItems = $choosePanel.find('.tab-nav li'),
        $tabContentItems = $choosePanel.find('.tab-content-item');
    // 点击页面其他位置，让展框收回
    $(document).on('click', function () {
        if ($wrap.hasClass('open')) {
            $wrap.removeClass('open');
        }
    });
    $wrap.on('click', function (event) {
        event.stopPropagation();
    });
    $resultPanel.on('click', function () {
        if ($wrap.hasClass('open')) {
            $wrap.removeClass('open');
        } else {
            $wrap.addClass('open');
        }
    });
    // 选取城市操作
    $cityOptions.on('click', function () {
        $resultPanel.find('.choose-trigger').val($(this).text());
        $resultPanel.find('.choose-result').val($(this).attr('data-id'));
        $wrap.removeClass('open');
    });
    // 切换城市分组
    $tabNavItems.on('click', function () {
        if (!$(this).hasClass('current')) {
            $(this).addClass('current').siblings().removeClass('current');
            $tabContentItems.eq($(this).index()).addClass('current').siblings().removeClass('current');
        }
    });
};