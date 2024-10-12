import './App.css' // at the top of App.jsx
// export function Welcome(props) { // custom Welcome component
//     return (
//     <div className="Welcome">
//     {/* if the 'name' prop exists, render it on the screen */}
//     <h3>Welcome {props.name}!</h3>
//     {/* if this component has children, render them here */}
//     {props.children}
//     </div>
//     ) }

   
// componentBox class styles a component into a box
// Welcome class identifies this component
export function Welcome(props) {
return (
<div className="componentBox">
<h3>Welcome {props.name}!</h3>
</div>
)
}