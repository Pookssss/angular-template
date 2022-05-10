/**
 *
 * @param len: number
 * Cr: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 */
export function generateSalt(len: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < len; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
 *
 * @param count: number
 * @param total: number
 * @param unit: string
 */
export function viewTblTitle(count: number, total: number, unit: string): string {
    return `จำนวนแสดง ${numberWithCommas(count || 0)} ${unit} จากทั้งหมด ${numberWithCommas(total || 0)} ${unit}`;
}

/**
 *
 * @param x: number
 */
export function numberWithCommas(x: number) {
    const parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}

/**
 *
 * @param object: object
 */
export const isEmptyObj = (object: object) => !Object.getOwnPropertySymbols(object).length && !Object.getOwnPropertyNames(object).length;

/**
 *
 * @param buffer: ArrayBuffer
 */
export const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
};

import * as CryptoJS from 'crypto-js';


/**
 * Decrypt cipher with secret key
 * @param cipherText: string
 * @param key: string
 */
export const decryptSecret = (cipherText: string, key: string): string => CryptoJS.AES.decrypt(cipherText, key).toString(CryptoJS.enc.Utf8);

/**
 * Percent
 * @param valueNumber: number
 * @param allNumber: number
 */
export function percentOfValue(valueNumber: number, allNumber: number, fixed: number = 0): number {
    if (allNumber === 0) {
        return 0;
    } else {
        if (valueNumber === 0) {
            return 0;
        } else {
            const percent = Number(((valueNumber / allNumber) * 100).toFixed(0));
            return percent;
        }
    }
}
