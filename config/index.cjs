/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx33747521905754a2',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'b056eda9f395fc0ed12a56fec9773aec',

  PROVINCE: '重庆',
  CITY: '重庆',

  USERS: [
    {
      // 想要发送的人的名字
      name: '晨斐小乖兔',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o-ENC6Y3uWnONbnA1h6srTtt-fFI',
      // https://github.com/xuejy19/wechat-public-account-push/blob/master/config/index.cjs
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'mROUjPELFOTnThfTjoCbIBBnpX7lqN8dNQnDeyDO8mw',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '05-01',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '晨斐小乖兔', year: '1997', date: '05-01',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '乖巧思考猫', year: '1997', date: '01-30',
        },
        {
          type: '节日', name: '相恋纪念日', year: '2021', date: '03-09',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2021-03-09' },
        // 结婚纪念日
//         { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '0p9LL9Z_CQnfkyXfrWK24dxNXoR8dVj_5zLTkLSDMKc',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o-ENC6e9oiQr6uH5keVX3yLKq0C8',
    }
  ],

}

module.exports = USER_CONFIG

