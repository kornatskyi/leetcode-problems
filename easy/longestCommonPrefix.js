/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    function prefOfTwo(w1, w2) {

        let i = 0;
        let pref = ""
        while (i < w1.length && i < w2.length) {
            if (w1[i] === w2[i]) {
                pref = pref + w1[i]
            } else {
                break
            }
            i++;
        }
   
        return pref
    }

    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
    
        prefix = prefOfTwo(prefix, strs[i])

    }

    return prefix
};

const strs = ["49", "neykgrybpitzfunlefmtmbikgpxkqingmmsudqysarrilgtrnhka tmrklbbtojfadcftaxwtqegyxymeioodcfonirhxaozdsfyseulxysvxsjdazsgbzupilyfnmgqflqzsllplfmjzwobvghzibos mzbaftfrkhjxuaibmtakibiqjhamvsbjrcjxwrqgybfsbntpjtatwilfrmsmgtvyxextxpbvqgntwiihbkcyunflbzxku ksbjnyypuqxjjtstcvgevaubmxclhxgtpjcchatdsrpdmhzpefvafpdtpffyenstwuydxrjrkyvxhuonzjpgbsaqa oesgaodytcretccoblkrzjaosdjstjxkprsphvpazj tljjovufwfhkxltpeeoowfhnoedpemwzzhipeeuakdljogzvnpljxuwlzzcfnygogodkvxnhdyqrgpmtfycesb tcsaqsgeaxknsjazmapeghsaoseslf.................", "flsight"]


console.log(longestCommonPrefix(strs));