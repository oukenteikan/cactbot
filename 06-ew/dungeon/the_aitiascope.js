Options.Triggers.push({
  id: 'TheAitiascope',
  zoneId: ZoneId.TheAitiascope,
  timelineFile: 'the_aitiascope.txt',
  triggers: [
    {
      id: 'Aitiascope Livia Frustration',
      type: 'StartsUsing',
      netRegex: { id: '6448', source: 'Livia the Undeterred', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'Aitiascope Livia Aglaea Climb NE/SW',
      type: 'StartsUsing',
      netRegex: { id: '6442', source: 'Livia the Undeterred', capture: false },
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Back Right / Front Left',
          de: 'hinten rechts / vorne links',
          fr: 'Derrière à droite / Devant à gauche',
          ja: '右下 / 左上',
          cn: '右后 / 左前',
          ko: '오른쪽 아래 / 왼쪽 위',
        },
      },
    },
    {
      id: 'Aitiascope Livia Aglaea Climb NW/SE',
      type: 'StartsUsing',
      netRegex: { id: '6443', source: 'Livia the Undeterred', capture: false },
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Back Left / Front Right',
          de: 'hinten links / vorne rechts',
          fr: 'Derrière à gauche / Devant à droite',
          ja: '左下 / 右上',
          cn: '左后 / 右前',
          ko: '왼쪽 아래 / 오른쪽 위',
        },
      },
    },
    {
      id: 'Aitiascope Livia Aglaea Bite',
      type: 'StartsUsing',
      netRegex: { id: '6449', source: 'Livia the Undeterred' },
      response: Responses.tankCleave('alert'),
    },
    {
      id: 'Aitiascope Livia Ignis Odi',
      type: 'StartsUsing',
      netRegex: { id: '644D', source: 'Livia the Undeterred' },
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'Aitiascope Rhitahtyn Tartarean Impact',
      type: 'StartsUsing',
      netRegex: { id: '6455', source: 'Rhitahtyn the Unshakable', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'Aitiascope Rhitahtyn Shield Skewer',
      type: 'StartsUsing',
      netRegex: { id: '6450', source: 'Rhitahtyn the Unshakable', capture: false },
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Hide behind broken crystal',
          de: 'Hinter dem gebrochenen Kristall verstecken',
          fr: 'Cachez-vous derrière le cristal brisé',
          ja: '壊れたクリスタルの後ろ',
          cn: '躲在破碎的水晶后',
          ko: '부서진 수정 뒤로',
        },
      },
    },
    {
      id: 'Aitiascope Rhitahtyn Shrapnel Shell',
      type: 'StartsUsing',
      netRegex: { id: '6452', source: 'Rhitahtyn the Unshakable', capture: false },
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Away from Crosshairs',
          de: 'Weg von den Zielmarkierungen',
          fr: 'Éloignez-vous de la zone de ciblage',
          ja: 'ゆかから離れる',
          cn: '远离准星',
          ko: '원형 장판에서 멀어지기',
        },
      },
    },
    {
      id: 'Aitiascope Rhitahtyn Anvil of Tartarus',
      type: 'StartsUsing',
      netRegex: { id: '6456', source: 'Rhitahtyn the Unshakable' },
      response: Responses.tankBuster(),
    },
    {
      id: 'Aitiascope Sinking Regret Lost Opportunity',
      type: 'StartsUsing',
      netRegex: { id: '6B1F', source: 'Sinking Regret' },
      condition: (data) => data.CanStun(),
      response: Responses.stun(),
    },
    {
      id: 'Aitiascope Amon Dark Forte',
      type: 'StartsUsing',
      netRegex: { id: '6464', source: 'Amon the Undying' },
      response: Responses.tankBuster(),
    },
    {
      id: 'Aitiascope Amon Ysayle\'s Spirit Dreams of Ice',
      type: 'Ability',
      netRegex: { id: '6C6C', source: 'Ysayle\'s Spirit', capture: false },
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Hide Behind Ice',
          de: 'hinter dem Eis verstecken',
          fr: 'Cachez-vous derrière la glace',
          ja: '氷の後ろ',
          cn: '躲在冰柱后面',
          ko: '얼음 뒤로',
        },
      },
    },
    {
      id: 'Aitiascope Amon Entr\'acte',
      type: 'StartsUsing',
      netRegex: { id: '6465', source: 'Amon the Undying', capture: false },
      response: Responses.aoe(),
    },
    {
      id: 'Aitiascope Amon Right Firaga Forte',
      type: 'StartsUsing',
      netRegex: { id: '6460', source: 'Amon the Undying', capture: false },
      response: Responses.goRight(),
    },
    {
      id: 'Aitiascope Amon Left Firaga Forte',
      type: 'StartsUsing',
      netRegex: { id: '6461', source: 'Amon the Undying', capture: false },
      response: Responses.goLeft(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'en',
      'replaceText': {
        'Left Firaga Forte/Right Firaga Forte': 'Left/Right Firaga Forte',
      },
    },
    {
      'locale': 'de',
      'replaceSync': {
        'Aethershot': 'Ätherschuss',
        'Amon the Undying': 'Amon',
        'Livia the Undeterred': 'Livia (?:der|die|das) Glühend(?:e|er|es|en)',
        'Rhitahtyn the Unshakable': 'Rhitahtyn (?:der|die|das) Geplagt(?:e|er|es|en)',
        'Sinking Regret': 'Versunken(?:e|er|es|en) Reue',
        'The Central Observatory': 'Hauptwarte',
        'The Midnight Downwell': 'Wirbelstrom',
        'The Saltcrystal Strings': 'Kristalline Flur',
        'Ysayle\'s Spirit': 'Ysayles Seele',
      },
      'replaceText': {
        '\\(proximity\\)': '(Distanz)',
        'Aglaea Bite': 'Aglaia-Biss',
        'Aglaea Climb': 'Aglaia-Aufstieg',
        'Aglaea Shot': 'Aglaia-Schuss',
        'Antistrophe': 'Antistrophe',
        'Anvil of Tartarus': 'Amboss des Tartarus',
        'Curtain Call': 'Klimax',
        'Dark Forte': 'Dunkelung Forte',
        'Disparagement': 'Verunglimpfung',
        'Dreams of Ice': 'Eisige Träume',
        'Entr\'acte': 'Entracte',
        'Epode': 'Epode',
        'Eruption Forte': 'Eruption Forte',
        'Frustration': 'Frustration',
        'Ignis Amoris': 'Ignis Amoris',
        'Ignis Odi': 'Ignis Odi',
        '(?<!Tartarean )Impact': 'Begraben',
        'Left Firaga Forte': 'Linkes Firaga Forte',
        'Odi et Amo': 'Odi et Amo',
        'Right Firaga Forte': 'Rechtes Firaga Forte',
        'Shield Skewer': 'Schildspieß',
        'Shrapnel Shell': 'Schrapnell-Geschoss',
        '(?<!Anti)Strophe': 'Strophe',
        'Tartarean Impact': 'Schlag des Tartarus',
        'Tartarean Spark': 'Funken des Tartarus',
        'Thundaga Forte': 'Blitzga Forte',
        'Vexillatio': 'Vexillatio',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Aethershot': 'Projectile d\'éther',
        'Amon the Undying': 'Amon',
        'Livia the Undeterred': 'Livia',
        'Rhitahtyn the Unshakable': 'Rhitahtyn',
        'Sinking Regret': 'Regret Enfoui',
        'The Central Observatory': 'Observatoire central',
        'The Midnight Downwell': 'Turbulences éthérées',
        'The Saltcrystal Strings': 'Enchevêtrements cristallins',
        'Ysayle\'s Spirit': 'âme d\'Ysayle',
      },
      'replaceText': {
        '\\?': ' ?',
        '\\(proximity\\)': '(proximité)',
        'Aglaea Bite': 'Morsure d\'Aglaia',
        'Aglaea Climb': 'Flambée d\'Aglaia',
        'Aglaea Shot': 'Tir d\'Aglaia',
        'Antistrophe': 'Antistrophe',
        'Anvil of Tartarus': 'Tartarus enclume',
        'Curtain Call': 'Rappel',
        'Dark Forte': 'Ténèbres forte',
        'Disparagement': 'Dénigrement',
        'Dreams of Ice': 'Illusions glacées',
        'Entr\'acte': 'Entracte',
        'Epode': 'Épode',
        'Eruption Forte': 'Éruption forte',
        'Frustration': 'Frustration',
        'Ignis Amoris': 'Ignis Amoris',
        'Ignis Odi': 'Ignis Odi',
        '(?<!Tartarean )Impact(?! )': 'Ensevelissement',
        'Left Firaga Forte(?!/)': 'Méga Feu forte gauche',
        'Left Firaga Forte/Right Firaga Forte': 'Méga Feu forte gauche/droite',
        'Odi et Amo': 'Odi et Amo',
        '(?<!/)Right Firaga Forte': 'Méga Feu forte droit',
        'Shield Skewer': 'Perce-bouclier',
        'Shrapnel Shell': 'Obus shrapnel',
        '(?<!Anti)Strophe': 'Strophe',
        'Tartarean Impact': 'Impact de Tartarus',
        'Tartarean Spark': 'Étincelle de Tartarus',
        'Thundaga Forte': 'Méga Foudre forte',
        'Vexillatio': 'Vexillatio',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Aethershot': 'エーテル弾',
        'Amon the Undying': '異執のアモン',
        'Livia the Undeterred': '愛執のリウィア',
        'Rhitahtyn the Unshakable': '宿執のリットアティン',
        'Sinking Regret': 'サンクン・リグレト',
        'The Central Observatory': '主観測室',
        'The Midnight Downwell': '星海乱流域',
        'The Saltcrystal Strings': '星海結晶域',
        'Ysayle\'s Spirit': 'イゼルの魂',
      },
      'replaceText': {
        'Aglaea Bite': 'アグライアバイト',
        'Aglaea Climb': 'アグライアクライム',
        'Aglaea Shot': 'アグライアショット',
        'Antistrophe': 'アンティストロペー',
        'Anvil of Tartarus': 'タルタロスアンヴィル',
        'Curtain Call': '終幕の熱狂',
        'Dark Forte': 'フォルテダーク',
        'Disparagement': 'ディスペレッジメント',
        'Dreams of Ice': '氷結の幻想',
        'Entr\'acte': '幕間の風狂',
        'Epode': 'エポードス',
        'Eruption Forte': 'フォルテエラプション',
        'Frustration': 'フラストレーション',
        'Ignis Amoris': 'イグニス・アモリス',
        'Ignis Odi': 'イグニス・オディー',
        '(?<!Tartarean )Impact': '衝撃',
        'Left Firaga Forte': 'レフト・フォルテファイガ',
        'Odi et Amo': 'オディー・エト・アモー',
        'Right Firaga Forte': 'ライト・フォルテファイガ',
        'Shield Skewer': 'シールドスキュワー',
        'Shrapnel Shell': '榴散弾',
        '(?<!Anti)Strophe': 'ストロペー',
        'Tartarean Impact': 'タルタロスインパクト',
        'Tartarean Spark': 'タルタロススパーク',
        'Thundaga Forte': 'フォルテサンダガ',
        'Vexillatio': 'ウェクシッラティオ',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Aethershot': '以太弹',
        'Amon the Undying': '邪执外道的亚蒙',
        'Livia the Undeterred': '迷执爱恋的莉维亚',
        'Rhitahtyn the Unshakable': '强执忠义的里塔提恩',
        'Sinking Regret': '沉沦的后悔',
        'The Central Observatory': '主观测室',
        'The Midnight Downwell': '乱流海域',
        'The Saltcrystal Strings': '结晶海域',
        'Ysayle\'s Spirit': '伊塞勒的灵魂',
      },
      'replaceText': {
        '\\(proximity\\)': '(接近)',
        'Aglaea Bite': '典雅女神枪',
        'Aglaea Climb': '典雅女神连枪',
        'Aglaea Shot': '典雅女神射击',
        'Antistrophe': '回舞歌',
        'Anvil of Tartarus': '冥狱铁砧',
        'Curtain Call': '离场',
        'Dark Forte': '暗强音',
        'Disparagement': '蔑视',
        'Dreams of Ice': '寒冰的幻想',
        'Entr\'acte': '间歇',
        'Epode': '长短句交替',
        'Eruption Forte': '强音喷发',
        'Frustration': '挫败',
        'Ignis Amoris': '爱之火',
        'Ignis Odi': '恨之火',
        '(?<!Tartarean )Impact': '冲击',
        'Left Firaga Forte': '左侧强音爆炎',
        'Left Firaga Forte(?!/)': '左侧强音爆炎',
        'Odi et Amo': '恨且爱',
        'Right Firaga Forte': '右侧强音爆炎',
        'Shield Skewer': '盾牌穿刺',
        'Shrapnel Shell': '榴散弹',
        '(?<!Anti)Strophe': '正旋舞歌',
        'Tartarean Impact': '冥狱冲击',
        'Tartarean Spark': '冥狱火花',
        'Thundaga Forte': '强音暴雷',
        'Vexillatio': '布旗',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Aethershot': '에테르탄',
        'Amon the Undying': '이집의 아몬',
        'Livia the Undeterred': '애집의 리위아',
        'Rhitahtyn the Unshakable': '숙집의 리트아틴',
        'Sinking Regret': '침잠한 후회',
        'The Central Observatory': '주 관측실',
        'The Midnight Downwell': '별바다 난류해역',
        'The Saltcrystal Strings': '별바다 결정해역',
        'Ysayle\'s Spirit': '이젤의 영혼',
      },
      'replaceText': {
        '\\(proximity\\)': '(중앙)',
        'Aglaea Bite': '아글라이아 쌍격',
        'Aglaea Climb': '아글라이아 상승격',
        'Aglaea Shot': '아글라이아 사격',
        'Antistrophe': '응답절',
        'Anvil of Tartarus': '타르타로스의 모루',
        'Curtain Call': '대단원의 열광',
        'Dark Forte': '포르테 다크',
        'Disparagement': '비방',
        'Dreams of Ice': '빙결의 환상',
        'Entr\'acte': '막간의 풍류광',
        'Epode': '최종절',
        'Eruption Forte': '포르테 분출',
        'Frustration': '좌절',
        'Ignis Amoris': '미움의 불',
        'Ignis Odi': '사랑의 불',
        'Left Firaga Forte': '왼쪽 포르테 파이가',
        'Odi et Amo': '오디 에트 아모',
        'Right Firaga Forte': '오른쪽 포르테 파이가',
        'Shield Skewer': '방패 찌르기',
        'Shrapnel Shell': '유산탄',
        'Tartarean Impact': '타르타로스의 충격',
        'Tartarean Spark': '타르타로스의 불꽃',
        'Thundaga Forte': '포르테 선더가',
        'Vexillatio': '파견 부대',
        'Left Firaga Forte(?!/)': '왼쪽 포르테 파이가',
        '(?<!/)Right Firaga Forte': '오른쪽 포르테 파이가',
        '(?<!Tartarean )Impact': '충격',
        '(?<!Anti)Strophe': '시작절',
      },
    },
  ],
});
