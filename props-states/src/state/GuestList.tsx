import { useState } from "react";

const GuestList: React.FC = () => {
    const [name, setName] = useState('');
    const [guest, setGuest] = useState<string[]>([]);

    const addGuestHandler = () => {
        setName('');
        setGuest([...guest, name])
    }

  return (
    <div>
        <h3>GuestList</h3>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
        <button onClick={addGuestHandler}>Add Guest</button>
        
    
    </div>
  )
}

export default GuestList;