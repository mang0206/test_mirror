Sunburst(flare, {
    value: d => d.size, // size of each node (file); null for internal nodes (folders)
    label: d => d.name, // display name for each cell
    title: (d, n) => `${n.ancestors().reverse().map(d => d.data.name).join(".")}\n${n.value.toLocaleString("en")}`, // hover text
    link: (d, n) => n.children
      ? `https://github.com/prefuse/Flare/tree/master/flare/src/${n.ancestors().reverse().map(d => d.data.name).join("/")}`
      : `https://github.com/prefuse/Flare/blob/master/flare/src/${n.ancestors().reverse().map(d => d.data.name).join("/")}.as`,
    width: 1152,
    height: 1152
})

flare = Object{
    name: "flare", children: Array(10)
}

flare = FileAttachment("flare.json").json()