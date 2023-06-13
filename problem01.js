const findAnagrams = (strs) =>{
    const map = new Map();

    for (const str of strs) {
        const sorted = [...str].sort().join('');

        if (!map.has(sorted)) {
            map.set(sorted, []);
        }

        map.get(sorted).push(str);
    }

    const result = [];

    for (const [sorted, group] of map) {
        if (group.length > 1) {
            result.push(group);
        }
    }

    return result;
}

module.exports = findAnagrams;

