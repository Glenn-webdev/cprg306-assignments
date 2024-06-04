const Item = ({name,quantity,category}) => {

    return (
        <li>
            <div className=' w-60  text-center p-1 border-2 rounded-full shadow-md'>
                <p className="text-sm font-semibold">Name: {name}</p>
                <p className="text-sm font-semibold">Category: {category}</p>
            
            
                <p className="text-black-600">Quantity: {quantity}</p>
            </div>
            
        </li>
    );

};

export default Item;