/**
 * @return {function():string}
 */
const getUid = (() => {
    let counter = Math.floor(Math.random() * 2147483648);

    return () => (counter++).toString(36);
})();

export default getUid;
