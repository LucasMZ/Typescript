"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function FetchMoeda() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch("https://economia.awesomeapi.com.br/json/USD-BRL");
        const data = yield response.json();
        showMoeda(data[0]);
    });
}
FetchMoeda();
function showMoeda(data) {
    document.body.innerHTML = `
            <h2>${data.name} </h2>
            <h2>${data.high} </h2>
    `;
}
console.log(FetchMoeda);
