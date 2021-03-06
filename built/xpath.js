"use strict";
// Copyright 2018 Knowledge Expert SA
//
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
class Xpath {
    constructor(xpathString, ...conditions) {
        const conditionsString = conditions.length > 0
            ? conditions.map(condition => `[${condition.toString()}]`).join('')
            : '';
        this.xpathString = xpathString + conditionsString;
    }
    static x(tag, ...conditions) {
        return new Xpath(`//${tag}`, ...conditions);
    }
    descendant(xpathString, ...conditions) {
        return new Xpath(`${this.xpathString}//${xpathString}`, ...conditions);
    }
    descendantOrSelf(xpathString, ...conditions) {
        return new Xpath(`${this.xpathString}/descendant-or-self::${xpathString}`, ...conditions);
    }
    child(xpathString, ...conditions) {
        return new Xpath(`${this.xpathString}/${xpathString}`, ...conditions);
    }
    parent() {
        return new Xpath(`${this.xpathString}/../`);
    }
    // all following elements (same level + deeper)
    following(xpathString, ...conditions) {
        return new Xpath(`${this.xpathString}/following::${xpathString}`, ...conditions);
    }
    next(xpathString, ...conditions) {
        return this.following(xpathString, ...conditions);
    }
    // all following elements (same level only)
    followingSibling(xpathString, ...conditions) {
        return new Xpath(`${this.xpathString}/following-sibling::${xpathString}`, ...conditions);
    }
    nextSibling(xpathString, ...conditions) {
        return this.followingSibling(xpathString, ...conditions);
    }
    // all preceding elements (same level + deeper)
    preceding(xpathString, ...conditions) {
        return new Xpath(`${this.xpathString}/preceding::${xpathString}`, ...conditions);
    }
    previous(xpathString, ...conditions) {
        return this.preceding(xpathString, ...conditions);
    }
    // all preceding elements (same level only)
    precedingSibling(xpathString, ...conditions) {
        return new Xpath(`${this.xpathString}/preceding-sibling::${xpathString}`, ...conditions);
    }
    previousSibling(xpathString, ...conditions) {
        return this.precedingSibling(xpathString, ...conditions);
    }
    build() {
        return this.toString();
    }
    toString() {
        return this.xpathString;
    }
}
Xpath.root = new Xpath('/.');
exports.Xpath = Xpath;
//# sourceMappingURL=xpath.js.map