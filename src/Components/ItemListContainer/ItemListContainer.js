import './ItemListContainer.css';

function ItemListContainer(props) {
    return(
        <div>
            <p>Sin stock!: {props.greeting}</p>
        </div>
    )
}

export default ItemListContainer;
