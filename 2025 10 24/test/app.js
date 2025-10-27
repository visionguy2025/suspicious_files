// PREPARE SCENE ELEMENTS
const container = document.getElementById('container');
const canvas = document.createElement('canvas');
let ctx_1, ctx_2;

// SAVE NODE DATA HERE
const NODES = [];

// DYNAMIC VALUES
let isMouseDown = false;
let selectedElement = null;
let isLocked = true;
let offset_x = 0;
let offset_y = 0;

// CREATE GRID ON CANVAS
const canvasGrid = () => {
    let gridStartX = 0;
    let gridStartY = 0;
    // let gridEndX = container.getBoundingClientRect().width;
    // let gridEndY = container.getBoundingClientRect().height;
    ctx_1.beginPath();
    // ctx_1.moveTo(gridStartX, gridStartY);
    // for(var i=1; i<=50; i++) {
    //     horizontalCount
    // };
    // for(var i=1; i<=30; i++) {
    //     verticalCount
    // };
    // ctx_1.lineTo(200, 200);
    // ctx_1.lineTo(300, 200);
    ctx_1.strokeStyle = '#ffffff';
    ctx_1.lineWidth = 1;
    ctx_1.stroke();
};

// // ADD CANVAS STRING
// const addStrings = () => {
//     console.log(NODES);
// };
// // TEMP
// try {
//     let node1 = document.getElementById('1');
//     let node2 = document.getElementById('2');
//     // DB ?
// } catch(error) {};

// GENERATE UNIQUE ID FOR NEW NODES
const idGenerator = (database) => {
    // CREATE NEW ID VALUE
    let newId = 0;

    // IF DATABASE IS NOT EMPTY
    if(database.length){
        // LOOP INSIDE DATA TO SEE WHAT IS MAX ID NUMBER
        for(var i=0; i<database.length; i++) {
            newId > Number(database[i].id) ? newId : newId = Number(database[i].id);
        };
    };

    // INCREASE VALUE TO MAKE UNIQUE NEW ID
    newId += 1;

    // RETURN GENERATED NEW ID
    return newId;
};

// CREATE NEW NODE AND BRING TO SCENE
const addNode = () => {
    // CREATE NEW DIV ELEMENT FOR NODE
    const newNode = document.createElement('div');

    // ASSIGN NEW ID & ATTRIBUTES ON THIS NODE
    newNode.id = idGenerator(NODES);
    newNode.setAttribute('islocked', 'false');

    // SET BASE STYLES TO THIS NODE
    newNode.style.zIndex = '1';
    newNode.style.position = 'absolute';
    newNode.style.left = '0px';
    newNode.style.top = '0px';
    newNode.style.color = '#ffffff';
    newNode.style.fontFamily = 'monospace';
    newNode.style.fontSize = '1rem';
    newNode.style.fontWeight = '500';
    newNode.style.display = 'flex';
    newNode.style.justifyContent = 'center';
    newNode.style.alignItems = 'center';
    newNode.style.border = '2px solid #ffffff';
    newNode.style.borderRadius = '1.5rem';
    newNode.style.backgroundColor = '#000000';
    newNode.style.width = '250px';
    newNode.style.height = '150px';
    newNode.style.cursor = 'grab';
    newNode.innerHTML = `Node #${newNode.id}`;

    // CREATE PLUG IN & PLUG OUT PORTS FOR EACH NODES
    const plug_in = document.createElement('div');
    const plug_out = document.createElement('div');
    newNode.appendChild(plug_in);
    newNode.appendChild(plug_out);

    // BRING NEW READY NODE INTO THE SCENE & ADD TO DATABASE
    let new_node_details = {
        id: newNode.id,
        position_x: Number(String(newNode.style.left).slice(0, String(newNode.style.left).length-2)),
        position_y: Number(String(newNode.style.top).slice(0, String(newNode.style.top).length-2)),
        plugIn: {
            left: 0,
            top: Number(String(newNode.style.height).slice(0, String(newNode.style.height).length-2) / 2),
        },
        plugOut: {
            left: Number(String(newNode.style.width).slice(0, String(newNode.style.width).length-2)),
            top: Number(String(newNode.style.height).slice(0, String(newNode.style.height).length-2) / 2),
        },
    };
    NODES.push(new_node_details);
    container.appendChild(newNode);

    // PREPARE PLUG IN
    plug_in.style.zIndex = '1';
    plug_in.style.position = 'absolute';
    plug_in.style.left = new_node_details.plugIn.left + 'px';
    plug_in.style.top = new_node_details.plugIn.top + 'px';
    plug_in.style.transform = 'translate(-50%, -50%)';
    plug_in.style.border = '2px solid #ffffff';
    plug_in.style.borderRadius = '50%';
    plug_in.style.backgroundColor = '#ff0000'; // #00ff00 if plugged
    plug_in.style.width = '14px';
    plug_in.style.height = '14px';

    // PREPARE PLUG OUT
    plug_out.style.zIndex = '1';
    plug_out.style.position = 'absolute';
    plug_out.style.left = new_node_details.plugOut.left + 'px';
    plug_out.style.top = new_node_details.plugOut.top + 'px';
    plug_out.style.transform = 'translate(-50%, -50%)';
    plug_out.style.border = '2px solid #ffffff';
    plug_out.style.borderRadius = '50%';
    plug_out.style.backgroundColor = '#ff0000'; // #00ff00 if plugged
    plug_out.style.width = '14px';
    plug_out.style.height = '14px';
};

// EVENTS
window.addEventListener('DOMContentLoaded', function(){
    // SET UP CANVAS
    canvas.style.zIndex = '1';
    canvas.style.position = 'absolute';
    canvas.style.left = '0';
    canvas.style.top = '0';
    canvas.style.backgroundColor = '#000000';
    canvas.width = container.getBoundingClientRect().width;
    canvas.height = container.getBoundingClientRect().height;
    canvas.style.overflow = 'hidden';
    container.appendChild(canvas);

    // CANVAS CONTEXTS
    ctx_1 = canvas.getContext('2d');
    ctx_2 = canvas.getContext('2d');

    canvasGrid();
});
window.addEventListener('keypress', function(event){
    event.preventDefault();
    if(String(event.key).toLowerCase() == 'o'){
        addNode();
    };
});
window.addEventListener('mousedown', function(event){
    event.preventDefault();
    isMouseDown = true;
    selectedElement = event.target;
    selectedElement.hasAttribute('islocked') ? (selectedElement.getAttribute('islocked') == 'false' ? isLocked = false : isLocked = true) : isLocked = true;
    offset_x = event.layerX;
    offset_y = event.layerY;
});
window.addEventListener('mousemove', function(event){
    event.preventDefault();
    let cursor_x = event.x;
    let cursor_y = event.y;

    if(isMouseDown && selectedElement && !isLocked){
        selectedElement.style.left = cursor_x - offset_x + 'px';
        selectedElement.style.top = cursor_y - offset_y + 'px';

        // UPDATE NODE POSITIONS FOR STRING COORDINATES
        for(var i=0; i<NODES.length; i++){
            NODES[i].position_x = selectedElement.getBoundingClientRect().left;
            NODES[i].position_y = selectedElement.getBoundingClientRect().top;
            break;
        };
    };
});
window.addEventListener('mouseup', function(event){
    event.preventDefault();
    isMouseDown = false;
    selectedElement = null;
    isLocked = true;
});



// STRUCTURE
`
    link nodeA to nodeB ?
    create new 5 layered string with canvas bg
    calculate coordinates and dimentions

    movement node
    movement node slower accurate mode
    movement node with snap feature sync canvas grid

    template litetal as table of content with section line numbers which sections or blocks contains which codes and what they do

    feature to make able pan X and Y inside container without scrollbars, also zoom in out, ctrl buttons for zeroings, etc

    annotation pen & eraser & clear btn

    multipleselect with mousedown and mousemove rectangle, with ctrl button, isSelected, unselect all or by ctrl button
`;
