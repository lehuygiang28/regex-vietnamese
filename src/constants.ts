export const caseA = 'aáàảãạăắằẳẵặâấầẩẫậ';
export const caseE = 'eéèẻẽẹêếềểễệ';
export const caseI = 'iíìỉĩị';
export const caseO = 'oóòỏõọôốồổỗộơớờởỡợ';
export const caseU = 'uúùủũụưứừửữự';
export const caseY = 'yýỳỷỹỵ';
export const caseD = 'dđ';

export const LOWER_CASE_MAP = new Map<string, string>([
    ['a', caseA],
    ['e', caseE],
    ['i', caseI],
    ['o', caseO],
    ['u', caseU],
    ['y', caseY],
    ['d', caseD],
    ['A', caseA],
    ['E', caseE],
    ['I', caseI],
    ['O', caseO],
    ['U', caseU],
    ['Y', caseY],
    ['D', caseD],
]);

export const UPPER_CASE_MAP = new Map<string, string>([
    ['a', caseA.toUpperCase()],
    ['e', caseE.toUpperCase()],
    ['i', caseI.toUpperCase()],
    ['o', caseO.toUpperCase()],
    ['u', caseU.toUpperCase()],
    ['y', caseY.toUpperCase()],
    ['d', caseD.toUpperCase()],
    ['A', caseA.toUpperCase()],
    ['E', caseE.toUpperCase()],
    ['I', caseI.toUpperCase()],
    ['O', caseO.toUpperCase()],
    ['U', caseU.toUpperCase()],
    ['Y', caseY.toUpperCase()],
    ['D', caseD.toUpperCase()],
]);

export const SAME_CASE_MAP = new Map<string, string>([
    ['a', caseA],
    ['e', caseE],
    ['i', caseI],
    ['o', caseO],
    ['u', caseU],
    ['y', caseY],
    ['d', caseD],
    ['A', caseA.toUpperCase()],
    ['E', caseE.toUpperCase()],
    ['I', caseI.toUpperCase()],
    ['O', caseO.toUpperCase()],
    ['U', caseU.toUpperCase()],
    ['Y', caseY.toUpperCase()],
    ['D', caseD.toUpperCase()],
]);

export const BOTH_LOWER_UPPER_CASE_MAP = new Map<string, string>([
    ['a', caseA + caseA.toUpperCase()],
    ['e', caseE + caseE.toUpperCase()],
    ['i', caseI + caseI.toUpperCase()],
    ['o', caseO + caseO.toUpperCase()],
    ['u', caseU + caseU.toUpperCase()],
    ['y', caseY + caseY.toUpperCase()],
    ['d', caseD + caseD.toUpperCase()],
    ['A', caseA + caseA.toUpperCase()],
    ['E', caseE + caseE.toUpperCase()],
    ['I', caseI + caseI.toUpperCase()],
    ['O', caseO + caseO.toUpperCase()],
    ['U', caseU + caseU.toUpperCase()],
    ['Y', caseY + caseY.toUpperCase()],
    ['D', caseD + caseD.toUpperCase()],
]);
