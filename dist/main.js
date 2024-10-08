"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allRanks = exports.rankMeta = void 0;
exports.filterRanksByElement = filterRanksByElement;
exports.filterRanksByCategory = filterRanksByCategory;
const caf_ranks_json_1 = __importDefault(require("./caf-ranks.json"));
exports.rankMeta = {
    element: caf_ranks_json_1.default.element,
    category: caf_ranks_json_1.default.category,
};
exports.allRanks = caf_ranks_json_1.default.allRanks.map((rank) => (Object.assign(Object.assign({}, rank), { element: rank.element, category: rank.category, getCategoryName: function () {
        return exports.rankMeta.category[this.category];
    } })));
function filterRanksByElement(ranks, cafElement) {
    return ranks.filter((rank) => {
        return rank.element.filter((element) => element === cafElement).length > 0;
    });
}
function filterRanksByCategory(ranks, rankCategory) {
    return ranks.filter((rank) => rank.category === rankCategory);
}
exports.default = {
    rankMeta: exports.rankMeta,
    allRanks: exports.allRanks,
    filterRanksByElement,
    filterRanksByCategory,
};
