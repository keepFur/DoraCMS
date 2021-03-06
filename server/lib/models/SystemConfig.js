/**
 * Created by Administrator on 2015/4/15.
 * 数据操作记录
 */
var mongoose = require('mongoose');
var shortid = require('shortid');
var Schema = mongoose.Schema;


var SystemConfigSchema = new Schema({
    _id: {
        type: String,

        'default': shortid.generate
    },
    date: { type: Date, default: Date.now },
    siteName: { type: String, default: '前端开发俱乐部' },
    siteDomain: { type: String, default: 'http://www.html-js.cn' },
    siteDiscription: { type: String, default: '前端开发' },
    siteKeywords: String,
    siteAltKeywords: String, // 标签内的alt关键字
    siteEmailServer: String,
    siteEmail: String,
    siteEmailPwd: String,
    registrationNo: { type: String, default: '' },
    mongodbInstallPath: String,
    databackForderPath: String,
    showImgCode: { type: Boolean, default: false }, // 是否显示验证码
    poseArticlScore: { type: Number, default: 1 },
    postMessageScore: { type: Number, default: 1 },
    shareArticlScore: { type: Number, default: 1 }
});

var SystemConfig = mongoose.model("SystemConfig", SystemConfigSchema);

module.exports = SystemConfig;

