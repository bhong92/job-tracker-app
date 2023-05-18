const deleteSkill = async () => {
    const skill = document.getElementById("delete-skill");
    const payload = {
        'id': skill.getAttribute("itemid"),
        'name': skill.getAttribute("name")
    }
    // emit request to delete row and reload
    const response = await fetch('/skill', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    // TODO create a proper loading and confirmation or rejection UI
    if (response.status === 200) {
        setTimeout(function(){
            window.location.reload();
            }, 10);
    }
};

const showCreateModal = () => {
    const screenCover = document.getElementById('create-modal-screen-cover');
    const modal = document.getElementById('create-modal');

    modal.style.display = 'flex';
    screenCover.style.display = 'block';

    modal.style.opacity = '1';
    screenCover.style.opacity = '1';
}


const showEditModal = () => {
    let skill = document.getElementById("edit-skill");
    skill = {
        'id': skill.getAttribute("itemid"),
        'name': skill.getAttribute("name")
    }
    const screenCover = document.getElementById('edit-modal-screen-cover');
    const modal = document.getElementById('edit-modal');
    modal.style.display = 'flex';
    screenCover.style.display = 'block';
    modal.style.opacity = '1';
    screenCover.style.opacity = '1';
    const button = document.getElementById("submit-edit-skill");
    button.onclick = editSkillSubmit(skill);
}

const hideEditModal = () => {
    const screenCover = document.getElementById('edit-modal-screen-cover');
    const modal = document.getElementById('edit-modal');

    modal.style.opacity = '0';
    screenCover.style.opacity = '0';

    setTimeout(() => {
        modal.style.display = 'none';
        screenCover.style.display = 'none';
    }, 400);
};

const formHandler = (event) => {
    event.preventDefault()
    const form = event.target.parentNode;
    return {
        'id': form.id,
        'name': form.children[0]?.children[0]?.value,
    };
}

const editSkillSubmit = async (skill) => {
    const response = await fetch('/skill', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(skill)
    })
    console.log(await response.json())
    hideEditModal();
    // TODO create a proper loading and confirmation or rejection UI
}

const createSkillSubmit = async () => {
    const skill = document.getElementById("Skill").value;
    const payload = {'name': skill}
    
    const response = await fetch('/skill', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })

    if (response.status === 200) {
        
        setTimeout(function(){
            window.location.reload();
            }, 10);
    }
    console.log(await response.json())
    // TODO create a proper loading and confirmation or rejection UI
}

const hideCreateModal = () => {
    const screenCover = document.getElementById('edit-modal-screen-cover');
    const modal = document.getElementById('edit-modal');

    modal.style.opacity = '0';
    screenCover.style.opacity = '0';

    setTimeout(() => {
        modal.style.display = 'none';
        screenCover.style.display = 'none';
    }, 400);
};