const Item = ({name,quantity,category}) => {

    return (
        <li>
            <div className='p-3 border rounded shadow-md'>
                <p className="text-sm font-semibold">Name: {name}</p>
                <p className="text-sm font-semibold">Category: {category}</p>
            
            
                <p className="text-black-600">Quantity: {quantity}</p>
            </div>
            
        </li>
    );

};

export default Item;