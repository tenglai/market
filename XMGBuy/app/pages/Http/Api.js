/**
 * 数据接口 组件
 */
const ApiBase = "http://14.127.188.40:8848";

const ApiUrl = {
	appAllScopeStatistic: ApiBase + "/exhibition/appStatistic.do/appAllScopeStatistic",  // 获取所有区域统计
	appGetScopeCompany: ApiBase + "/exhibition/appStatistic.do/appGetScopeCompany", // 获取单个区域统计
	appGetCompanyDepartment: ApiBase + "/exhibition/appStatistic.do/appGetCompanyDepartment", // 获取单个公司统计
	appGetStaffDetail: ApiBase + "/exhibition/appStatistic.do/appGetStaffDetail", // 获取人员详情
	appAllScopeAlarm: ApiBase + "/exhibition/appAlarmStatistic.do/appAllScopeAlarm", // 获取所有报警统计
	appGetScopeAlarmCompany: ApiBase + "/exhibition/appAlarmStatistic.do/appGetScopeAlarmCompany", // 获取单个区域报警统计
	appGetCompanyAlarmDetail: ApiBase + "/exhibition/appAlarmStatistic.do/appGetCompanyAlarmDetail", // 获取单个区域单个公司报警人员信息
	appGetMonitorList: ApiBase + "/exhibition/appExhibitionMonitor.do/appGetMonitorList", // 获取实时监控数据
}

// module.exports = ApiUrl;
global.ApiUrl = ApiUrl;