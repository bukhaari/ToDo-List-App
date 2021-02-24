import React, {useState} from 'react';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
  
function ToDo() {
    let IntialDatas = [];
    let [datas, setDatas] = useState(IntialDatas)
    let [data, setData] = useState({ 
        name:"", id:"", status:"" 
    });
    
    function handleDelete(id){
        const newDatas = datas.filter(d => d.id !== id);
        setDatas(newDatas);
    };
    
    function complate(id){
    const index =  datas.indexOf(id);
    // console.log(index)
    const neDatas = [...datas]
    neDatas[index].status === true? neDatas[index].status = false: neDatas[index].status = true
    setDatas(neDatas);
    };

    function handleSubmit(e){
        e.preventDefault();
        const newDatas =[...datas]
        if(data.name !== ""){
        newDatas.push(data);
        setDatas(newDatas)
        } else toast.error('Please Enter the text')
    };
    
   function handleChange ({currentTarget: input}){
       const newData = {...data}
       newData[input.name] = input.value
       newData['id'] = datas.length+1;
       newData['status'] = true;
        setData(newData)
    };

 
        return (
            <div>
            <ToastContainer></ToastContainer>
           <div className="card shadow" style={{margin:20}}>
           <div className="card-header bg-info text-white">
                    <h4 className="text-center">TodoList App</h4>
                </div>
                <div className="card-body">
                       <form onSubmit={handleSubmit}>
                       <div className="row">
                        <div className="col-6">
                        <div className="form-group">
                            <input onChange={handleChange} name="name" value={data["name"]}  className="form-control" placeholder="Add To do"/>
                        </div>
                        </div>
                        <div className="col-4">
                           <button className="btn btn-info" style={{width:100}}>Add</button>
                        </div>
                       </div>
                       </form>
                       <div className="row">
                        <div className="col-12 mt-4">
                        <ul className="list-group">
                        {datas.map( d =>
                            <li key={d.id}  className="list-group-item">
                                <div className="row">
                                <div className="col-6">
                                {d.status === true? <h5>{d.name}</h5>:<h5><del>{d.name}</del></h5> }
                                </div>
                                <div className="col-6">
                                <button onClick={()=> handleDelete(d.id)} className="m-1 btn btn-danger">Delete</button>
                                {d.status === true?
                                <button onClick={()=> complate(d)} className="btn btn-info">Complate</button>:
                                <button onClick={()=> complate(d)} className="btn btn-info">Uncomplate</button>
                                }
                                </div>
                                </div>
                                
                            </li>
                        )}
                    </ul>
                    </div>
                        <div className=" col-8">
                            <h5>Total Task: <span className="badge badge-info">{datas.filter(d=> d.status === true).length}</span></h5>
                        </div>
                        <div className=" col-4">
                            <h5>Complate Task: <span className="badge badge-info">{datas.filter( d => d.status === false ).length}</span></h5>
                        </div>
                    </div>
               </div>
            </div>
     </div>
      
        );
    
}

export default ToDo;