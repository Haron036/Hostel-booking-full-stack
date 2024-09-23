import axios from "axios"

export const api = axios.create({
    baseURL :"http://localhost:8000"
})
export async function addRoom(photo, roomType, roomPrice) {
    const formData = new FormData();
    formData.append("photo", photo);
    formData.append("roomType", roomType);
    formData.append("roomPrice", roomPrice);

    try {
        const response = await api.post('/rooms/add/new-room', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })

        if (response.status === 201) {
            return response.data; // Return the room data from the backend
        } else {
            return false;
        }
    } catch (error) {
        console.error("Error adding room:", error);
        return false;
    }
}

    /*This function gets all room types from the database*/

    export async function getRoomTypes(){
        try{
            const response = await api.get('/rooms/room/types')
            return response.data;

        }catch(error){
            throw new Error("Error fetching room types")

        }

    }
    /*This functions gets all rooms from the database*/
    export async function getAllRooms(){
        try{
            const result = await api.get("/rooms/all-rooms")
            return result.data

        }catch(error){
            throw new Error("Error fetching rooms")

        }

    }



    
