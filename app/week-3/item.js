const Item = ({name,quantity,category}) => {

    return (
        <li>
            <div>
                <p className="text-lg font-semibold">Name: {name}</p>
                <p className="text-lg font-semibold">Category: {category}</p>
            </div>
            <div>
                <p className="text-black-600">Quantity: {quantity}</p>
            </div>
            
        </li>
    );

};

export default Item;