document.querySelector('.deploy-modal').addEventListener('click', ()=>{
    let stored = document.querySelector('.big_container');
    let after= document.createElement('div');
    after.className='after';
    stored.appendChild(after);
    let box_modal= document.createElement('div');
    box_modal.className= 'appearance_modal';
    after.appendChild(box_modal);
    let content_modal_text=document.createElement('p');
    content_modal_text.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem blanditiis, reprehenderit rerum ducimus soluta iste. Quo aut repellendus error saepe, et atque optio cum. Recusandae veritatis dolores dolor vitae Fugit odio voluptatum earum sapiente modi dolores, obcaecati quisquam aliquid harum error quibusdam commodi optio voluptatem quis perspiciatis assumenda aspernatur unde iusto quos doloribus? Modi accusamus minus necessitatibus impedit nobis!"
    content_modal_text.className='shows_text';
    box_modal.appendChild(content_modal_text);
    let btn_close=document.createElement('button');
    btn_close.className='btn_close';
    box_modal.appendChild(btn_close);
    btn_close.onclick= function(){
        after.style.display="none";
    }
})

document.querySelector('.deploy-modal2').addEventListener('click', ()=>{
    let stored = document.querySelector('.big_container');
    let after= document.createElement('div');
    after.className='after';
    stored.appendChild(after);
    let box_modal= document.createElement('div');
    box_modal.className= 'appearance_modal';
    box_modal.style.background="#e89e94";
    after.appendChild(box_modal);
    let content_modal_text=document.createElement('p');
    content_modal_text.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem blanditiis, reprehenderit rerum ducimus soluta iste. Quo aut repellendus error saepe, et atque optio cum. Recusandae veritatis dolores dolor vitae Fugit odio voluptatum earum sapiente modi dolores, obcaecati quisquam aliquid harum error quibusdam commodi optio voluptatem quis perspiciatis assumenda aspernatur unde iusto quos doloribus? Modi accusamus minus necessitatibus impedit nobis!"
    content_modal_text.className='shows_text';
    box_modal.appendChild(content_modal_text);
    let btn_close=document.createElement('button');
    btn_close.className='btn_close';
    box_modal.appendChild(btn_close);
    btn_close.onclick= function(){
        after.style.display="none";
    }
})