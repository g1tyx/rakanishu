/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "(physical)": "(物理)",
    "Attack rating": "攻击率",
    "Attack speed": "攻击速度",
    "Attributes": "属性",
    "Cast rate": "施放率",
    "Chances to block": "格挡几率",
    "Cold": "寒冷",
    "Damage": "伤害",
    "Damage reduction": "减少伤害",
    "Defense": "防御",
    "Dexterity": "灵巧",
    "Donate": "捐赠",
    "Energy": "能量",
    "Explore the Blood Moor to begin your adventure.": "探索血之沼泽开始你的冒险。",
    "Fire": "火",
    "Freeze duration": "冻结时间",
    "Get back to the camp to get healed !": "回到营地接受治疗！",
    "Got it !": "知道了！",
    "Increase chances to find magical": "增加找到魔法的机会",
    "Increase defense and attack rating": "提高防御和攻击率",
    "Levels": "等级",
    "Life": "生命值",
    "Lightning": "闪电",
    "Magical Damage reduction": "魔法伤害减免",
    "Mana": "法力",
    "Open Inventory": "打开仓库",
    "Options": "选项",
    "Other data": "其他数据",
    "Poison": "毒",
    "Poison duration": "中毒持续时间",
    "Quests": "任务",
    "Resistances": "抗性",
    "Rogue Encampment (H)": "盗贼营地 (H)",
    "Show Gold": "显示金子",
    "Show hits": "显示命中",
    "Show kills": "显示击杀",
    "Show Non-magical items": "显示非魔法物品",
    "Skills": "技能",
    "Stats": "统计",
    "Strength": "力量",
    "Stun duration": "眩晕时间",
    "Support & Credits": "支持和积分",
    "Vitality": "体力",
    "Your life is low.": "你的生命值很低。",
    "All": "全部",
    "Body": "身体",
    "Body:": "身体：",
    "Equipment": "装备",
    "Feet": "脚",
    "Feet:": "脚：",
    "Finger": "手指",
    "Finger:": "手指：",
    "Gold:": "金子：",
    "Hands": "手",
    "Hands:": "手：",
    "Head": "头",
    "Head:": "头：",
    "Inventory": "仓库",
    "Neck": "脖子",
    "Neck:": "脖子：",
    "Nothing": "无",
    "Potions": "药水",
    "Shield": "盾",
    "Shield:": "盾：",
    "Show:": "显示：",
    "Waist": "腰部",
    "Waist:": "腰部：",
    "Weapon": "武器",
    "Weapon:": "武器：",
    "Auto-pause on inventory": "打开仓库时自动暂停",
    "Clear the Den of Evil": "清除邪恶的巢穴",
    "Close": "关闭",
    "Combat": "战斗",
    "Dark mode": "深色模式",
    "Death:": "死亡：",
    "Den of Evil": "邪恶巢穴",
    "Discipline": "惩罚",
    "Download": "下载",
    "Export / Import": "导入/导出",
    "Hard reset": "硬重置",
    "Increase damages": "增加伤害",
    "Killed:": "击杀：",
    "Light mode": "浅色模式",
    "Magic": "魔法",
    "Magic Missile": "魔法飞弹",
    "Parry": "格挡",
    "Restore life": "恢复生命",
    "Shock": "冲击",
    "Summon Crow": "召唤乌鸦",
    "Quill Rat": "毛老鼠",
    "Staff": "手杖",
    "+1 to Cold Mastery (Sorceress only)": "+1 冰冷掌握（仅限女术士）",
    "Drink": "喝",
    "Equip": "装备",
    "Fallen": "堕落者",
    "Get back to the camp when your life is too low.": "当你的生命值太低时回到营地。",
    "Item dropped:": "掉落物品：",
    "Minor healing potion": "小型治疗药水",
    "Potion dropped: Minor healing potion": "掉落的药水：小型治疗药水",
    "Sell": "出售",
    "Short Staff": "短杖",
    "Two-handed": "双手",
    "Unlocked: Potion quickslots": "解锁：药水快速槽",
    "(magical)": "(魔法)",
    "(normal)": "(普通)",
    "Minor mana potion": "小法力药水",
    "Zombie": "僵尸",
    "Leather Boots": "皮靴",
    "Undead": "不死",
    "Unequip": "卸下",
    "[passive] Increase damages.": "[被动] 增加伤害。",
    "Current level:": "当前等级：",
    "Create a wave of electrical energy that deals damage and has 25% chances to stun all monsters around.": "制造一道造成伤害的电能波，并有 25% 的几率击晕周围的所有怪物。",
    "Heal.": "治疗.",
    "Increase block rate.": "提高格挡几率。",
    "Increase life & life regeneration": "提高 生命值 和 生命值恢复",
    "Launch a magic missile, dealing magical damage to 1 monster.": "发射魔法飞弹，对1只怪物造成魔法伤害。",
    "+1 Skill quickslot": "+1 快捷技能槽",
    "Summon a crow to fight for you.": "召唤乌鸦为你而战。",
    "Next level:": "下一级：",
    "Increase mana & mana regeneration": "增加法力和法力恢复",
    "+75% to resist fire for 120s": "+75% 火抗，持续 120 秒",
    "Buckler": "小圆盾",
    "Dagger": "匕首",
    "Leather Gloves": "皮手套",
    "equipped": "已装备",
    "Sash": "腰带",
    "Bronze Hand Axe": "青铜手斧",
    "Robe": "长袍",
    "Short Sword": "短剑",
    "Den of Evil": "邪恶巢穴",
    "Level up !": "升级了！",
    "+1 to Carrion Vine (Druid only)": "+1 腐肉藤蔓（仅限德鲁伊）",
    "+1 to Meteor (Sorceress only)": "+1 流星（仅限女术士）",
    "Adventurer only": "仅限冒险家",
    "Axe": "斧子",
    "Druid only": "仅限德鲁伊",
    "Fallen Shaman": "堕落萨满",
    "Gargantuan Beast": "巨兽",
    "Hand Axe": "手斧",
    "Lightning enchanted monsters will deal lightning damage every time they get hit!": "被闪电强化的怪物每次被击中都会造成闪电伤害！",
    "Sword": "剑",
    "Summon Fallen": "召唤堕落者",
    "This monster is special. It deals elemental damages. Try to increase your resistances to avoid being crushed.": "这个怪物很特别。 它会造成元素伤害。 尝试增加你的抵抗力以避免被压碎。",
    "+50% damage to undeads": "+50% 对不死生物的伤害",
    "(rare)": "(稀有)",
    "Club": "击棍",
    "Bronze Ring": "青铜戒指",
    "Azure Hard Leather Armor of Strength": "青色硬皮力量盔甲",
    "Epic": "史诗",
    "Gamble": "赌博",
    "Get reward": "领取奖励",
    "Gheed": "吉德",
    "Kashya": "卡夏",
    "Kill Blood Raven in the Burial's Grounds": "在墓地杀死血鸦",
    "Leather Armor of Jackal": "豺狼皮甲",
    "Legendary": "传奇",
    "Lizard's Quilted Armor of Remedy": "蜥蜴的绗缝护甲",
    "Mace": "钉头锤",
    "Magical": "魔法",
    "Market": "市场",
    "Merchant": "商人",
    "Meshif": "梅西夫",
    "Price": "价格",
    "Rare": "稀有",
    "Show more": "显示更多",
    "Sisters' Burial Grounds": "姐妹墓地",
    "Warriv": "瓦里夫",
    "Wolf Head": "狼头",
    "[passive] Increase damages and attack rating when using Axes.": "[被动]使用斧头时增加伤害和攻击等级。",
    "[passive] Increase damages and attack rating when using Maces.": "[被动] 使用钉头锤时增加伤害和攻击等级。",
    "[passive] Increase damages and attack rating when using Swords.": "[被动]使用剑时增加伤害和攻击等级。",
    "[passive] Increase defense.": "[被动] 增加防御。",
    "[passive] Increase resistances to all elements.": "[被动] 增加对所有元素的抗性。",
    "+1 to Fireball (Sorceress only)": "+1 火球术（仅限女术士）",
    "+1 to Summon Wolf (Druid only)": "+1 召唤狼（仅限德鲁伊）",
    "5% life stolen per hit": "每次命中偷走 5% 生命",
    "Accurate": "精准",
    "Agile": "灵巧",
    "Amulet of Strength": "力量护身符",
    "Axe mastery": "斧头精通",
    "Azure Buckler": "蔚蓝圆盾",
    "Azure Heavy Boots": "碧蓝重靴",
    "Azure Leather Armor": "蔚蓝皮甲",
    "Azure Leather Gloves": "天蓝色皮手套",
    "Bash": "重击",
    "Beryl Leather Boots": "绿柱石皮靴",
    "Bronze Short Sword": "青铜短剑",
    "Bronze Spiked Club": "青铜尖刺击棍",
    "Bronze Spiked Club of Readiness": "青铜尖刺击棍",
    "Brutal": "野蛮",
    "Buckler of Blocking": "格挡圆盾",
    "Buckler of Dexterity": "灵巧圆盾",
    "Burning Skull Cap": "燃烧骷髅帽",
    "Cap": "帽",
    "Change class": "更换职业",
    "Chilling Helm": "冰冷头盔",
    "Club of Worth": "价值击棍",
    "Concentrate": "集中",
    "Crimson Robe of Dexterity": "深红灵巧长袍",
    "Dagger of Craftsmanship": "工艺匕首",
    "Dagger of Worth": "价值匕首",
    "Expert's Club": "专家击棍",
    "Expert's Hand Axe of Worth": "专家手斧",
    "Expert's Short Sword of Slaying": "专家的杀戮短剑",
    "Fast": "快速",
    "Fiery Dagger": "炽热匕首",
    "Fiery Spiked Club": "火热的尖刺击棍",
    "Fights beside you": "战斗时在你身边",
    "Frenzy": "疯狂",
    "Gives you potions when you need them": "在你需要的时候给你药水",
    "Gwinni (Fighter)": "格温妮（战士）",
    "Hard Leather Armor": "硬皮盔甲",
    "Hard Leather Armor of Strength": "硬皮力量盔甲",
    "Heavy Boots": "重型靴子",
    "Heavy Boots of Chance": "机会重靴",
    "Heavy Gloves of Bat": "蝙蝠重手套",
    "Hire": "雇佣",
    "Hirelings": "雇佣",
    "Increase damages and 25% chances to stun monster for a short period.": "增加伤害和 25% 几率在短时间内击晕怪物。",
    "Increase damages and attack rating.": "增加伤害和攻击等级。",
    "Increase damages, attack rating and attack speed.": "增加伤害、攻击等级和攻击速度。",
    "Iron Scimitar": "铁弯刀",
    "Iron Skin": "铁皮",
    "Isolde (Fighter)": "伊索尔德（战士）",
    "Isolde (Seller)": "伊索尔德（卖家）",
    "Ithera (Assistant)": "伊瑟拉（助理）",
    "Jagged Axe": "锯齿斧",
    "Jagged Club of Quality": "优质的锯齿击棍",
    "Jagged Dagger": "锯齿匕首",
    "Jagged Hand Axe": "锯齿手斧",
    "Jagged Sabre": "锯齿军刀",
    "Jagged Scimitar": "锯齿弯刀",
    "Jemali (Fighter)": "杰马利（战斗机）",
    "Kill the Countess": "杀死伯爵夫人",
    "Leather Armor": "皮甲",
    "Leather Armor of Dexterity": "灵巧皮甲",
    "Leather Armor of Remedy": "治疗皮甲",
    "Leather Boots of Fox": "狐狸皮靴",
    "Leather Gloves of Dexterity": "灵巧皮手套",
    "Leather Gloves of Jackal": "豺狼皮手套",
    "Leather Gloves of Renewal": "再生皮手套",
    "Leharas (Seller)": "莱哈拉斯 (Celler)",
    "Light Belt": "光带",
    "Lizard's Leather Boots": "蜥蜴皮靴",
    "Lizard's Ring": "蜥蜴之戒",
    "Lizard's Robe": "蜥蜴长袍",
    "Lizard's Small Shield": "蜥蜴的小盾",
    "Mace mastery": "狼牙棒掌握",
    "Mahala (Fighter)": "玛哈拉（战士）",
    "Masteries": "天赋",
    "Mercenary": "雇佣兵",
    "Natural Resistance": "自然抗性",
    "Precise": "精准",
    "Quilted Armor": "绗缝盔甲",
    "Reward: xp bonus": "奖励：经验奖励",
    "Ring of Craftsmanship": "工艺之戒",
    "Robe of Dexterity": "灵巧长袍",
    "Robe of Fox": "狐狸长袍",
    "Robe of Strength": "力量长袍",
    "Sash of Dexterity": "灵巧腰带",
    "Scimitar": "弯刀",
    "Scimitar of Craftsmanship": "工艺弯刀",
    "Scimitar of Worth": "价值弯刀",
    "Self-healing": "自我治疗",
    "Sells your junk items for you": "为您出售您的垃圾物品",
    "Septic Club": "腐烂的击棍",
    "Septic Large Axe": "腐烂的大斧",
    "Shivering Hand Axe": "颤抖的手斧",
    "Short Staff of Craftsmanship": "手工艺短杖",
    "Short Sword of Worth": "价值短剑",
    "Silver Spiked Club": "银色尖刺击棍",
    "Skull Cap of Remedy": "骷髅头帽",
    "Small Shield": "小盾",
    "Small Shield of Blocking": "小格挡之盾",
    "Snake's Cap": "蛇帽",
    "Snake's Leather Armor": "蛇的皮甲",
    "Snake's Wolf Head": "蛇的狼头",
    "Snowy Dagger of Worth": "白雪皑皑的价值匕首",
    "Snowy Short Sword": "雪域短剑",
    "Spiked Club": "尖刺击棍",
    "Static Club": "静态击棍",
    "Static Spiked Club": "静态尖刺击棍",
    "Strong Wolf Head": "强壮的狼头",
    "Sword mastery": "剑道精通",
    "Tangerine Leather Boots": "橘色皮靴",
    "Thawing Potion": "解冻药水",
    "The Forgotten Tower": "被遗忘的塔",
    "Tough": "坚韧",
    "- Extra strong": "- 超强",
    "Antidote": "解毒剂",
    "Blood Clan": "血族",
    "Dark Ranger": "黑暗游侠",
    "Fire enchanted": "火焰强化",
    "Ghost": "幽灵",
    "Long Staff": "长杖",
    "No available skill": "没有可用的技能",
    "Shortcut:": "捷径：",
    "The Countess": "伯爵夫人",
    "Undead - Mana burn": "不死族——法力燃烧",
    "Brute": "野蛮人",
    "Carver": "利刃魔",
    "Carver Shaman": "利刃魔萨满",
    "Dismiss": "解雇",
    "Enabled": "启用",
    "Give": "给予",
    "Hawk Helm": "鹰头盔",
    "Mana potion": "法力药水",
    "Iron Hand Axe": "铁手斧",
    "Healing potion": "治疗药水",
    "Night Clan": "夜族",
    "Skeleton Archer": "骷髅弓箭手",
    "Returned": "回归者",
    "Strong": "强壮",
    "Summon Carver": "召唤利刃魔",
    "Thawing potion": "解冻药水",
    "when life is under": "当生命值低于",
    "+1 to Cold skills (sorceress only)": "+1 冰冷技能（仅限女术士）",
    "+1 to Fire Mastery (Sorceress only)": "+1 火焰掌握（仅限女术士）",
    "+1 to Fire skills (sorceress only)": "+1 火焰技能（仅限女术士）",
    "+1 to Frozen Orb (Sorceress only)": "+1 冰冻宝珠（仅限女术士）",
    "+1 to Mana freeze (Sorceress only)": "+1 法力冻结（仅限女术士）",
    "+1 to Masteries (barbarian only)": "+1 精通（仅限野蛮人）",
    "+1 to Summon Mastery (Druid only)": "+1 召唤精通（仅限德鲁伊）",
    "+1 to Summon Pixie (Druid only)": "+1 召唤小精灵（仅限德鲁伊）",
    "+1 to Werebear (Druid only)": "+1 熊人（仅限德鲁伊）",
    "Add 2 poison damage over 2 seconds": "在 2 秒内增加 2 点毒伤害",
    "Cure from poison": "从毒中治愈",
    "Large Axe": "大斧",
    "Done !": "完成！",
    "Kill Andariel": "杀死 安达利尔",
    "Kill Duriel": "杀死 杜瑞尔",
    "Kill Mephisto": "杀死 墨菲斯托",
    "Reward: -1 monster / level in Act I": "奖励：第一幕中的-1 怪物/等级",
    "Reward: -1 monster / level in Act I & II": "奖励：第一幕和第二幕中的-1 怪物/等级",
    "Reward: -1 monster / level in Act I, II & III": "奖励：第一、二、三幕中的怪物/等级-1",
    "Reward: Auto-skip to next level (act I)": "奖励：自动跳到下一个级别（第一幕）",
    "Reward: Auto-skip to next level (act II)": "奖励：自动跳到下一个级别（第二幕）",
    "Reward: Relic effect +25%": "奖励：遗物效果+25%",
    "Reward: Start with a dagger": "奖励：从匕首开始",
    "Reward: Start with a poignard": "奖励：从一个 匕首 开始",
    "Reward: Start with a quilted armor": "奖励：从一件绗缝盔甲开始",
    "Use 10,000 skills in one run": "一轮游戏里使用 10,000 个技能",
    "Beryl Leather Gloves": "绿柱石皮手套",
    "Dark Hunter": "黑暗猎人",
    "Hungry Dead": "饿死鬼",
    "Moon Clan": "月族",
    "Show less": "显示更少",
    "Skeleton": "骷髅",
    "+1 to Frozen Armor (Sorceress only)": "+1 冰冻护甲（仅限女术士）",
    "+1 to Heat (Sorceress only)": "+1 加热（仅限女术士）",
    "+1 to Lycanthropy (Druid only)": "+1 变狼术（仅限德鲁伊）",
    "13% better chance of getting magic items": "获得魔法物品的几率提高 13%",
    "3% mana stolen per hit": "每次击中 3% 法力椅子",
    "5% Faster block rate": "5% 更快的格挡率",
    "Club of Craftsmanship": "手工艺俱乐部",
    "Dagger of Bat": "蝙蝠匕首",
    "Unlock 1 class": "解锁 1 职业",
    "Adventurer": "冒险家",
    "Azrael": "阿兹瑞尔",
    "Barbarian": "野蛮人",
    "Basanti": "巴桑蒂",
    "Can auto-cast 1 spell.": "可以自动施放 1个 法术。",
    "Class requirements (other than class & level) are needed only the first time you unlock a class.": "职业需求(除了职业和等级)只在你第一次解锁一个职业时才需要。",
    "Class selection": "职业选择",
    "Class unlocked": "职业解锁",
    "Devilkin": "恶魔人",
    "Druid": "德鲁伊",
    "Gain +15 to energy.": "获得 +15 能量。",
    "Gain +15 to vitality.": "获得 +15 生命力。",
    "Hannah": "汉娜",
    "Klaudia": "克劳迪娅",
    "Kyle": "凯尔",
    "Neeraj": "尼拉吉",
    "No requirements": "无要求",
    "Poison & Cold resist +15.": "毒&寒冷抗性+15。",
    "Raissa": "赖萨",
    "Requirements:": "要求：",
    "Select": "选择",
    "Sorceress": "女术士",
    "Specialize in combat.": "专攻格斗。",
    "Specialize in Magic.": "专攻魔法。",
    "Specialize in Summons & transformation.": "专注于召唤和转变。",
    "Starting class.": "初始职业。",
    "(epic)": "(史诗)",
    "(legendary)": "(传奇)",
    "+1 to Werewolf (Druid only)": "+1 狼人（仅限德鲁伊）",
    "when mana is under": "当法力低于",
    "Lightning enchanted": "闪电强化",
    "Septic Short Staff of Readiness": "蓄势待发的腐烂短杖",
    "- Undead": "- 不死",
    "Corpsefire": "尸火",
    "Azure Robe": "碧蓝长袍",
    "Cold enchanted": "寒冷强化",
    "Coldcrow": "寒鸦",
    "Crimson Leather Boots of Chance": "深红皮靴之几率",
    "Crimson Leather Gloves": "深红色皮手套",
    "Fanatic Cap of Jackal": "狂热的豺狼帽",
    "Hand Axe of Worth": "价值手斧",
    "Iron Short Sword": "铁短剑",
    "Iron Spiked Club of Slaying": "铁刺杀戮击棍",
    "Lizard's Cap": "蜥蜴帽",
    "Ring of Renewal": "复兴之戒",
    "Septic Spiked Club of Craftsmanship": "腐败的尖刺手工击棍",
    "Short Staff of Worth": "物有所值的短杖",
    "Snowy Dagger": "雪之匕首",
    "Spiked Club of Bat": "蝙蝠尖刺击棍",
    "Steel Axe": "钢斧",
    "Sturdy Quilted Armo": "坚固的绗缝盔甲",
    "Vile Hunter": "邪恶猎人",
    "Annor": "安诺",
    "Blaise": "布莱斯",
    "Chalan": "查兰",
    "Debi": "德比",
    "Gulzar": "古尔扎",
    "Leather Armor of Strength": "力量皮甲",
    "Maeko": "前子",
    "Sturdy Quilted Armor": "坚固的绗缝盔甲",
    "3% life stolen per hit": "每次命中偷取 3% 生命",
    "Misshapen": "异形",
    "Abhaya": "阿巴亚",
    "Akara": "阿卡拉",
    "All (including uniques)": "全部（包括唯一性）",
    "Clear Tristram": "清除 崔斯特瑞姆",
    "Dark Wood": "黑暗森林",
    "Elzix": "埃尔齐克斯",
    "Emilio": "埃米利奥",
    "Epic and below": "史诗及以下",
    "Expert's Axe of Leech": "专家的水蛭斧",
    "Expert's Skull Cap": "专家骷髅帽",
    "Iantha": "扬莎",
    "items with value below": "物品价值低于",
    "Leather Gloves of Regeneration": "再生皮手套",
    "Legendary and below": "传奇及以下",
    "Lizard's Leather Boots of Jackal": "蜥蜴的豺狼皮靴",
    "Magical and below": "神奇及以下",
    "Mahala": "马哈拉",
    "Normal": "普通的",
    "Olena": "埃琳娜",
    "Rare and below": "稀有及以下",
    "Resplenish life +3%": "补充生命 +3%",
    "Ring of Worth": "价值之戒",
    "Search for Cain": "寻找该隐",
    "Selling every 5.0s.": "每 5.0 秒销售一次。",
    "Smoldering Large Axe of Readiness": "闷烧的准备大斧",
    "Static Two-Handed Sword": "静态双手剑",
    "Strong Hard Leather Armor": "坚固的硬皮甲",
    "Strong Sash": "强力腰带",
    "Unfreeze": "解冻",
    "Visala": "维萨拉",
    "You": "你",
    "Add 4 poison damage over 2 seconds": "在 2 秒内增加 4 点毒伤害",
    "Spike Fiend": "刺魔",
    "Extra strong": "超强",
    "Pupil Amulet": "学生护身符",
    "Short Staff of Measure": "测量短杖",
    "Treehead Woodfist": "树头木拳",
    "Tristram": "崔斯特瑞姆",
    "- Extra strong - Undead": "- 超强 - 不死族",
    "Griswold": "格里斯沃尔德",
    "Spiked Shield of Fox": "狐狸尖刺盾",
    "Russet Leather Gloves": "赤褐色皮革手套",
    "Glowing Scimitar": "炽热弯刀",
    "Fanatic Hand Axe": "狂热手斧",
    "Forgotten Tower": "遗忘之塔",
    "Long Staff of Leech": "水蛭长杖",
    "The Hole": "洞窟",
    "Tamoe Highland": "泰摩高地",
    "Returned Mage": "回归法师",
    "Dark Stalker": "黑暗猎手",
    "Vile Archer": "邪恶弓箭手",
    "Thorn Beast": "荆棘兽",
    "The Pit": "深渊",
    "Vikhyat": "维克亚特",
    "+1 to Magic skills (apprentice only)": "+1 魔法技能（仅限学徒）",
    "+1 to Summon Resist (Druid only)": "+1 召唤抗性（仅限德鲁伊）",
    "14% Faster block rate": "14% 更快的阻止率",
    "Amulet of Craftsmanship": "工艺护身符",
    "Amulet of Jackal": "豺狼护身符",
    "Beryl Small Shield": "绿柱石小盾",
    "Cap of Jackal": "豺狼帽",
    "Chain Gloves of Fox": "狐狸链手套",
    "Clear the Barracks": "清除军营",
    "Crimson Buckler of Deflecting": "偏转的深红圆盾",
    "Crimson Sash of Fox": "深红狐狸腰带",
    "Durga": "杜尔加",
    "Expert's Large Axe": "专家的大斧",
    "Fara": "危险",
    "Fiery Short Sword": "炽热短剑",
    "Glowing Large Axe": "发光的大斧",
    "Helm": "舵",
    "Jagged Club of Craftsmanship": "锯齿状工艺俱乐部",
    "Jagged Spiked Club": "锯齿尖刺俱乐部",
    "Jerhyn": "杰海因",
    "Learner's Ring": "学习者戒指",
    "Leharas": "莱哈拉的",
    "Level": "等级",
    "Liene": "留置权",
    "Magical damage Reduced by 1": "魔法伤害减少1",
    "Returned Archer": "回归弓箭手",
    "Reward: Ability to imbue an item": "奖励：灌输物品的能力",
    "Ring Mail of Warding": "病房呼叫邮件",
    "Ring of Dexterity": "灵巧之戒",
    "Sabre": "军刀",
    "Sash of Regeneration": "再生腰带",
    "Septic Scimitar of Craftsmanship": "工艺的化粪弯刀",
    "Septic Short Staff": "腐烂的短杖",
    "Skull Cap of Skill": "技能之骷髅帽",
    "Snake's Leather Armor of Strength": "蛇的力量皮甲",
    "Snake's Sash of Strength": "蛇的力量腰带",
    "Speed": "速度",
    "Stash": "藏匿",
    "Steel Mace": "钢锤",
    "Store": "存放",
    "Sturdy Cap": "坚固的帽子",
    "Take": "拿走",
    "Tangerine Heavy Boots of Strength": "橘红色力量之靴",
    "Tangerine Ring Mail of Jackal": "豺狼橘环甲",
    "Tangerine Wolf Head": "橘色狼头",
    "Tools of the Trade": "贸易工具",
    "Vikhyat: Level up !": "维克亚特：升级！",
    "Wendy": "温迪",
    "(Fighter)": "(战士)",
    "Dark Archer": "黑暗射手",
    "Light mana potion": "光魔药水",
    "Monastery Gate": "修道院大门",
    "Studded Leather": "铆钉皮革",
    "Disfigured": "毁容者",
    "(unique Belt)": "（独特的腰带）",
    "[passive] Increase summons life and defense.": "[被动] 增加召唤物生命和防御。",
    "[passive] Increase summons resistances to all elements.": "[被动] 增加对所有元素的召唤抗性。",
    "[passive] Increases the Life of the Druid while Shapeshifted, as well as the duration of the transformation.": "[被动] 增加变形时德鲁伊的生命，以及变形的持续时间。",
    "+1 to Combat skills (barbarian only)": "+1 战斗技能（仅限野蛮人）",
    "Add 50 poison damage over 10 seconds": "在 10 秒内增加 50 点毒伤害",
    "Azure Light Belt of Fox": "碧蓝狐狸腰带",
    "Azure Wolf Head of Dexterity": "青狼灵巧之首",
    "Beryl Small Shield of Steadiness": "绿柱石小稳固盾",
    "Beryl Wolf Head": "绿柱石狼头",
    "Carrion Vine": "腐肉藤",
    "Cast rate +10%": "施法率 +10%",
    "Create item": "创建项目",
    "Crimson Ring of Apprentice": "深红学徒之戒",
    "Failed to create item": "创建项目失败",
    "Fanatic Axe of Craftsmanship": "狂热的手工艺之斧",
    "Freezing": "冻结",
    "Half stun duration": "半眩晕时间",
    "Item succesfully created:": "项目成功创建：",
    "Kasim": "卡西姆",
    "Lapis Hard Leather Armor of Skill": "青金石硬皮技能护甲",
    "Learner's Skull Cap of Steadiness": "学习者稳定骷髅帽",
    "Level  1 - Damage reduced by 0": "等级 1 - 伤害减少 0",
    "Level  5 - Life and mana regneration +0%": "5级 - 生命和法力回复 +0%",
    "Level 10 - Chances to freeze on hit: 0%": "10 级 - 击中时冻结的几率：0%",
    "Level 15 - All resistances +0": "15级 - 所有抗性+0",
    "Level 20 - Damage +0%": "20 级 - 伤害 +0%",
    "Level 25 - Attack rating +0%": "25 级 - 攻击等级 +0%",
    "Level 30 - Attack speed +0%.": "30 级 - 攻击速度 +0%。",
    "Liaza": "利亚萨",
    "Look! You can now select a new class.": "看！您现在可以选择一个新职业。",
    "Lycanthropy": "狼人",
    "Shape Shifting": "形状变换",
    "Shards": "碎片",
    "Shards:": "碎片：",
    "Shimmering Ring of Strength": "闪光的力量之戒",
    "Snake's Amulet of Leech": "蛇的水蛭护身符",
    "Strong Heavy Gloves of Dexterity": "坚固的重型灵巧手套",
    "Summon a eat corpses to heal you and your party.": "召唤一个吃尸体来治愈你和你的队伍。",
    "Summon a pixie that gives powers to you and all your summons depending on levels.": "召唤一个小精灵，根据等级赋予你和你所有的召唤力量。",
    "Summon a wolf to fight for you.": "召唤一只狼为你而战。",
    "Summon Mastery": "召唤精通",
    "Summon Pixie": "召唤小精灵",
    "Summon Resist": "召唤抵抗",
    "Summon Wolf": "召唤狼",
    "Summons": "召唤",
    "Transform into a bear.": "变身熊。",
    "Transform into a wolf.": "变身狼。",
    "Trollskin": "巨魔皮",
    "Tylena": "泰莱娜",
    "Werebear": "熊人",
    "Werewolf": "狼人",
    "You can now exile to get relics which makes you gather xp faster.": "您现在可以流放以获取使您更快地收集经验的遗物。",
    "You can now get hirelings to help you fight or to assist you in menial tasks.": "您现在可以雇佣雇佣兵来帮助您战斗或协助您完成琐碎的任务。",
    "You can try to create a unique item with your shards": "您可以尝试使用您的碎片创建一个独特的物品",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Elly": "艾莉",
    "Resistant": "抗性",
    "Isolde": "伊索尔德",
    "Amplisa": "安普丽莎",
    "Alhizeer": "阿尔希泽尔",
    "Ahsab": "阿萨布",
    "Rakanishu": "拉卡尼休",
    "Sharyn": "莎琳",
    "Rozene": "罗赞",
    "Fiona": "菲奥娜",
    "Fazel": "法泽尔",
    "v. beta.0.3.3 - Power of Nature": "v. beta.0.3.3 - 自然的力量",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Save ": "保存 ",
    "level ": "等级 ",
    "xp: ": "经验: ",
    "Blood Moor ": "血之沼泽 ",
    "Available points: ": "可用点数：",
    "Damage: ": "伤害: ",
    "Defense: ": "防御: ",
    "Price: ": "价格: ",
    "Speed: ": "速度: ",
    "Potion dropped: ": "药水掉落: ",
    "Restore mana: ": "恢复法力: ",
    "Restore life: ": "恢复生命值: ",
    "Required level: ": "要求等级: ",
    "Damage inflicted: ": "造成的伤害: ",
    "Stun duration: ": "眩晕时长: ",
    "Life: ": "生命值: ",
    "Mana Cost: ": "法力成本: ",
    "Heal: ": "治疗: ",
    "Duration: ": "持续时间: ",
    "Bonus: ": "奖励: ",
    "Chances to block: ": "格挡几率: ",
    "Gold dropped: ": "黄金掉落: ",
    "Extra Slots: ": "额外插槽: ",
    "Type: ": "类型: ",
    "Attack rating: ": "攻击率：",
    "Level required: ": "要求等级：",
    "Required strength: ": "力量要求：",
    "Unlocked: ": "解锁：",
    "Shrine of Resist Fire ": "火抗神殿",
    "Den of Evil ": "邪恶巢穴 ",
    "New area available: ": "新区域可用：",
    "Attack Rating ": "攻击率 ",
    "Life +": "生命值 +",
    "Mana +": "法力 +",
    "Dexterity +": "灵巧 +",
    "Defense +": "防御 +",
    "Damage +": "伤害 +",
    "Strength +": "力量 +",
    "Cold Resist +": "抗寒 +",
    "Cold Plains ": "寒冷平原 ",
    "Poison length ": "毒药长度 ",
    "Reset attr & skills ": "重置属性和技能 ",
    "Hirelings: ": "招聘: ",
    "Fire Resist +": "火抗 +",
    "Forgotten Tower ": "遗忘之塔 ",
    "Black Marsh ": "黑沼泽 ",
    "Minor healing potion ": "小生命药水 ",
    "Minor mana potion ": "小法力药水 ",
    "Thawing Potion ": "解冻药水 ",
    "Antidote ": "解药 ",
    "Attack Rate +": "攻击率 +",
    "Gives potion every ": "给予药水每隔 ",
    "Storage: ": "仓库: ",
    "Level: ": "等级: ",
    "Lightning Resist +": "闪电抗性 +",
    "Chances to block +": "格挡几率 +",
    "Resplenish mana +": "回复法力 +",
    "Required dexterity: ": "要求的灵巧：",
    "Burial Grounds ": "墓地",
    "Cave ": "洞穴",
    "Crypt ": "地下室",
    "Dark Wood ": "黑暗森林 ",
    "Mausoleum ": "陵墓",
    "Stony Field ": "石场",
    "Tristram ": "崔斯特瑞姆",
    "Underground Passage ": "地下通道",
    "Poison Resist +": "毒抗 +",
    "Summon crow level: ": "召唤乌鸦等级：",
    "Magic missile cast: ": "魔法飞弹施放：",
    "Kill Rakanishu: ": "杀死拉卡尼休：",
    "Max mana: ": "最大法力：",
    "Relics: ": "遗物：",
    "Class: ": "职业：",
    "Exile ": "放逐",
    "Shrine of Armor ": "盔甲神殿 ",
    "Vikhyat ": "维克亚特 ",
    "The Hole ": "洞窟 ",
    "Tamoe Highland ": "泰摩高地 ",
    "Resplenish life +": "恢复生命值 +",
    "Resist all +": "全部抗性 +",
    "The Pit ": "深渊 ",
    "Vikhyat ": "维克亚特 ",
    "Monastery Gate ": "修道院大门 ",
    "Shards to use: ": "使用的碎片：",
    "Life gainded after kill: ": "击杀后获得的生命值：",
    "Chances of success: ": "成功率：",
    "Attack speed: ": "攻击速度：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "You have been killed by Gargantuan Beast. Xp lost: ": "你被 巨兽 杀死了。 经验丢失：",
    "You have been killed by Zombie. Xp lost: ": "你被 僵尸 杀死了。 经验丢失：",
    "You have been killed by Quill Rat. Xp lost: ": "你被 毛老鼠 杀死了。 经验丢失：",
    "Zombie died. Xp earned: ": "僵尸死了。 获得经验：",
    "Quill Rat died. Xp earned: ": "毛老鼠死了。获得经验：",
    "Fallen died. Xp earned: ": "堕落者死了。 获得经验: ",
    "Gargantuan Beast died. Xp earned: ": "巨兽死了。 获得经验: ",
    "Fallen Shaman died. Xp earned: ": "堕落萨满死了。 获得经验：",
    "": "",
    "Gargantuan Beast: Hit ": "巨兽: 命中",
    "Hungry Dead: Hit ": "饿死鬼: 命中",
    "The Countess: Hit ": "伯爵夫人: 命中",
    "Rakanishu: Hit ": "洛卡尼修: 命中",
    "Carver Shaman: Hit ": "利刃魔萨满: 命中",
    "Skeleton: Hit ": "骷髅: 命中",
    "Devilkin: Hit ": "恶魔人: 命中",
    "Blood Clan: Hit ": "血族: 命中",
    "Night Clan: Hit ": "夜族: 命中",
    "Returned Mage: Hit ": "回归法师: 命中",
    "Ghost: Hit ": "幽灵: 命中",
    "Carver: Hit ": "利刃魔: 命中",
    "Griswold: Hit ": "格里斯沃尔德: 命中",
    "Vile Hunter: Hit ": "邪恶猎人: 命中",
    "Misshapen: Hit ": "异形: 命中",
    "Skeleton Archer: Hit ": "骷髅弓箭手: 命中",
    "Spike Fiend: Hit ": "刺魔: 命中",
    "Treehead Woodfist: Hit ": "树头木拳: 命中",
    "Returned: Hit ": "回归者: 命中",
    "Dark Stalker: Hit ": "黑暗猎手: 命中",
    "Vikhyat: Hit ": "维克亚特: 命中",
    "Vile Archer: Hit ": "邪恶弓箭手: 命中",
    "Dark Ranger: Hit Vikhyat ": "黑暗游侠: 命中 维克亚特",
    "Dark Ranger: Hit ": "黑暗游侠: 命中",
    "Disfigured: Hit ": "毁容者: 命中",
    "Returned Archer: Hit ": "回归弓箭手: 命中",
    "Zombie: Hit ": "僵尸: 命中",
    "Thorn Beast: Hit ": "荆棘兽: 命中",
    "Fallen: Hit ": "堕落者: 命中",
    "Quill Rat: Hit ": "毛老鼠: 命中",
    "Brute: Hit ": "野蛮人: 命中",
    "You: Hit ": "你: 命中",
    "Fallen Shaman: Hit ": "堕落萨满: 命中",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    " (Normal)": " (普通)",
    " (Slow)": " (慢)",
    " (Fast)": " (快)",
    " (Very fast)": " (很快)",
    " (Very slow)": " (很慢)",
    " (Fighter)": " (战士)",
    " (Seller)": " (出售者)",
    " (Assistant)": " (助手)",
    " (✓)": " (✓)",
    ": Blocked": ": 已格挡",
    ": Miss": ": 未命中",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^([\d\.]+) \+([\d\.]+)\/s$/,
    /^([\d\.]+)\%.$/,
    /^([\d\.]+)\%$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^\(([\d\.]+)s\)$/,
    /^\(([\d\.]+) \)$/,
    /^你(.+)$/,
    /^等级(.+)$/,
    /^奖励(.+)$/,
    /^要求等级(.+)$/,
    /^力量(.+)$/,
    /^价格(.+)$/,
    /^防御(.+)$/,
    /^速度(.+)$/,
    /^生命值(.+)$/,
    /^伤害(.+)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Activate (.+) shrines$/, '激活 $1 神殿'],
    [/^Die (.+) times$/, '死亡 $1 次'],
    [/^Craft (.+) unique items$/, '制作 $1 独特的物品'],
    [/^Sell (.+) items$/, '出售 $1 物品'],
    [/^Unlock (.+) classe$/, '解锁 $1 职业'],
    [/^Unlock (.+) classes$/, '解锁 $1 职业'],
    [/^Selling every (.+)s.$/, '每 $1 秒出售一次。'],
    [/^Kill (.+) monsters$/, '杀死 $1 怪物'],
    [/^Add (.+) cold damage$/, '增加 $1 冰冻伤害'],
    [/^Add (.+) lightning damage$/, '增加 $1 雷电伤害'],
    [/^Add (.+) fire damage$/, '增加 $1 火焰伤害'],
    [/^(.+) died. Xp earned: (.+)$/, '$1 死了。 获得经验：$2'],
    [/^You have been killed by (.+). Xp lost: (.+)$/, '你被 $1 杀死了。 经验值丢失：$2'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) \(chance to hit: ([\d\.]+)\%\)$/, '$1（命中率：$2%）'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^Reach level ([\d\.]+)$/, '达到等级 $1'],
    [/^Level ([\d\.]+)$/, '等级 $1'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^Max damage \+([\d\.,]+) \(base\)$/, '最大伤害 \+$1（基础）'],
    [/^Min damage \+([\d\.,]+) \(base\)$/, '最小伤害 \+$1（基础）'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Reward: (.+) attribute points$/, '奖励：$1 属性点'],
    [/^Reward: (.+) Hireling slot$/, '奖励：$1 雇用插槽'],
    [/^Reward: (.+) xp penalty on death$/, '奖励：$1 死亡时的经验惩罚'],
    [/^Reward: (.+) relics gain$/, '奖励：$1 遗物增益'],
    [/^Reward: (.+) Skill point$/, '奖励：$1 技能点'],
    [/^Reward: Stash size (.+)$/, '奖励：存储大小 $1'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);