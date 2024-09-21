/*
P: 섬 개수 n, 건설비용 costs
R: 모든 섬이 통행 가능하게 하는 최소 비용
E
P: 
*/
class Edge {
    s = 0;
    e = 0;
    w = 0;
    
    constructor(s, e, w) {
        this.s = s;
        this.e = e;
        this.w = w;
    }
}

function solution(n, costs) {
    const edges = costs.map((val) => new Edge(val[0], val[1], val[2]));
    const parents = Array.from({ length: n + 1 }, (_, index) => index);

    function find(x) {
        if (parents[x] == x) return x;
        parents[x] = find(parents[x]);
        return parents[x];
    }

    function union(x, y) {
        x = find(x);
        y = find(y);
        
        if(x > y) {
            parents[y] = x;
        } else {
            parents[x] = y;
        }
    }

    function kruskal(edges) {
        const mst = [];
        edges.sort((a, b) => a.w - b.w);
        let cost = 0;

        for (let i=0; i<edges.length; i++) {
            const edge = edges[i]
            // console.log(edge)
            // console.log(find(edge.s), find(edge.e))
            if(find(edge.s) != find(edge.e)) {
                union(edge.s, edge.e);
                mst.push([edge.s, edge.e]);
                cost += edge.w
            }
        }
        return [mst, cost]
    }
    
    const [mst, cost] = kruskal(edges);
    return cost;
}
