function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $3bfaed78d259bc1e$exports = {};

$parcel$export($3bfaed78d259bc1e$exports, "_area", () => $3bfaed78d259bc1e$export$7fcd0f4809a1f255);
$parcel$export($3bfaed78d259bc1e$exports, "stringToPolygon", () => $3bfaed78d259bc1e$export$a01e6b5107f59da5);
$parcel$export($3bfaed78d259bc1e$exports, "polygonToString", () => $3bfaed78d259bc1e$export$7e15f8e95de272d5);
$parcel$export($3bfaed78d259bc1e$exports, "simplify", () => $3bfaed78d259bc1e$export$798b53621063651);
$parcel$export($3bfaed78d259bc1e$exports, "area", () => $3bfaed78d259bc1e$export$bb3edc44842b5f2e);
// polygon utilies, used for cleaning up region data
// will be broken out to its own library
function $3bfaed78d259bc1e$export$7fcd0f4809a1f255(a, b) {
    return a.y * b.x - 0.5 * (a.x * a.y + b.x * b.y + (b.x - a.x) * (a.y - b.y));
}
function $3bfaed78d259bc1e$export$a01e6b5107f59da5(source) {
    const [polygon, leftover] = source.split(",").reduce((acc, num)=>{
        const [p, x] = acc;
        if (x === undefined) return [
            p,
            Number(num)
        ];
        else {
            p.push({
                x: x,
                y: Number(num)
            });
            return [
                p,
                undefined
            ];
        }
    }, [
        [],
        undefined
    ]);
    if (leftover !== undefined) throw new Error("odd number of coordinates (expected even)");
    return polygon;
}
function $3bfaed78d259bc1e$export$7e15f8e95de272d5(points) {
    return points.map((p)=>`${p.x},${p.y}`).join(",");
}
function $3bfaed78d259bc1e$export$798b53621063651(points, threshold = 0.5) {
    if (points.length < 4) return points;
    return points.reduce((poly, p)=>{
        if (poly.length < 2) poly.unshift(p);
        else if ($3bfaed78d259bc1e$export$bb3edc44842b5f2e(p, poly[0], poly[1]) < threshold) poly[0] = p;
        else poly.unshift(p);
        return poly;
    }, []);
}
function $3bfaed78d259bc1e$export$bb3edc44842b5f2e(...points) {
    if (points.length < 3) return 0;
    else return Math.abs(points.reduce((totalArea, p, index)=>{
        const q = index === 0 ? points[points.length - 1] : points[index - 1];
        return totalArea + $3bfaed78d259bc1e$export$7fcd0f4809a1f255(p, q);
    }, 0));
}




export {$3bfaed78d259bc1e$export$7fcd0f4809a1f255 as _area, $3bfaed78d259bc1e$export$a01e6b5107f59da5 as stringToPolygon, $3bfaed78d259bc1e$export$7e15f8e95de272d5 as polygonToString, $3bfaed78d259bc1e$export$798b53621063651 as simplify, $3bfaed78d259bc1e$export$bb3edc44842b5f2e as area};
//# sourceMappingURL=index.js.map
