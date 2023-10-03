"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allCaseOutput = exports.sideCaseMap = exports.sideUppercaseMap = exports.sideLowerCaseMap = exports.caseD = exports.caseY = exports.caseU = exports.caseO = exports.caseI = exports.caseE = exports.caseA = void 0;
exports.caseA = 'aáàảãạăắằẳẵặâấầẩẫậ';
exports.caseE = 'eéèẻẽẹêếềểễệ';
exports.caseI = 'iíìỉĩị';
exports.caseO = 'oóòỏõọôốồổỗộơớờởỡợ';
exports.caseU = 'uúùủũụưứừửữự';
exports.caseY = 'yýỳỷỹỵ';
exports.caseD = 'dđ';
exports.sideLowerCaseMap = new Map([
    ['a', exports.caseA],
    ['e', exports.caseE],
    ['i', exports.caseI],
    ['o', exports.caseO],
    ['u', exports.caseU],
    ['y', exports.caseY],
    ['d', exports.caseD],
    ['A', exports.caseA],
    ['E', exports.caseE],
    ['I', exports.caseI],
    ['O', exports.caseO],
    ['U', exports.caseU],
    ['Y', exports.caseY],
    ['D', exports.caseD],
]);
exports.sideUppercaseMap = new Map([
    ['a', exports.caseA.toUpperCase()],
    ['e', exports.caseE.toUpperCase()],
    ['i', exports.caseI.toUpperCase()],
    ['o', exports.caseO.toUpperCase()],
    ['u', exports.caseU.toUpperCase()],
    ['y', exports.caseY.toUpperCase()],
    ['d', exports.caseD.toUpperCase()],
    ['A', exports.caseA.toUpperCase()],
    ['E', exports.caseE.toUpperCase()],
    ['I', exports.caseI.toUpperCase()],
    ['O', exports.caseO.toUpperCase()],
    ['U', exports.caseU.toUpperCase()],
    ['Y', exports.caseY.toUpperCase()],
    ['D', exports.caseD.toUpperCase()],
]);
exports.sideCaseMap = new Map([
    ['a', exports.caseA],
    ['e', exports.caseE],
    ['i', exports.caseI],
    ['o', exports.caseO],
    ['u', exports.caseU],
    ['y', exports.caseY],
    ['d', exports.caseD],
    ['A', exports.caseA.toUpperCase()],
    ['E', exports.caseE.toUpperCase()],
    ['I', exports.caseI.toUpperCase()],
    ['O', exports.caseO.toUpperCase()],
    ['U', exports.caseU.toUpperCase()],
    ['Y', exports.caseY.toUpperCase()],
    ['D', exports.caseD.toUpperCase()],
]);
exports.allCaseOutput = new Map([
    ['a', exports.caseA + exports.caseA.toUpperCase()],
    ['e', exports.caseE + exports.caseE.toUpperCase()],
    ['i', exports.caseI + exports.caseI.toUpperCase()],
    ['o', exports.caseO + exports.caseO.toUpperCase()],
    ['u', exports.caseU + exports.caseU.toUpperCase()],
    ['y', exports.caseY + exports.caseY.toUpperCase()],
    ['d', exports.caseD + exports.caseD.toUpperCase()],
    ['A', exports.caseA + exports.caseA.toUpperCase()],
    ['E', exports.caseE + exports.caseE.toUpperCase()],
    ['I', exports.caseI + exports.caseI.toUpperCase()],
    ['O', exports.caseO + exports.caseO.toUpperCase()],
    ['U', exports.caseU + exports.caseU.toUpperCase()],
    ['Y', exports.caseY + exports.caseY.toUpperCase()],
    ['D', exports.caseD + exports.caseD.toUpperCase()],
]);
