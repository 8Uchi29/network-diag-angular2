export class NetworkElements {
    nodes: Node[];
    links: Links[];
}

export class Node {
    name:string;
    group:number;
}

export class Links {
    source: number;
    target: number;
    weight: number;
}
