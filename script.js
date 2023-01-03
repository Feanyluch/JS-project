function AddGroup() {
    var form_body = document.getElementById('form-body');
    
    // Section for creating each element
    var form_body_left = document.createElement("div")
    var left_form_body = document.createElement("div")
    var hash_tag = document.createElement('h3')
    var header3 = document.createElement('h3')
    var content1 = document.createElement('div')
    var remove_group = document.createElement('button')
    var text_input = document.createElement('input')


    // Section set attribute for each element
    form_body_left.setAttribute('class', "form-body-left")
    left_form_body.setAttribute('class', 'left-form-body')
    content1.setAttribute('class', 'content1')
    remove_group.setAttribute("id", "remove_group")
    text_input.setAttribute('value', "Group1")
        

    // Section to appen child for each element
    form_body_left.appendChild(left_form_body)
    left_form_body.appendChild(hash_tag)
    left_form_body.appendChild(header3)
    content1.appendChild(remove_group)
    content1.appendChild(text_input)
    form_body_left.appendChild(content1)
    form_body.appendChild(form_body_left)

    // InnerHtml for each element created
    hash_tag.innerHTML = '#'
    header3.innerHTML = "Grupo"
    remove_group.innerHTML = '-'
    

    //RIGHT SIDE OF THE TABLE BELOW (SLOT)

    // SECTION FOR CREATING ELEMENT 
    var form_body_right = document.createElement('div')
    var right_form_body = document.createElement('div')
    var right_header = document.createElement('h3')
    var content2 = document.createElement('div')
    var add_slot = document.createElement('div')
    var add_slot_btn = document.createElement('button')
    var form_body_container = document.createElement('div');


    // SECTION TO SETATTRIBUTE TO EACH ELEMENT
    form_body_right.setAttribute('class', 'form-body-right')    
    right_form_body.setAttribute('class', 'right-form-body')
    content2.setAttribute('id', 'content2')
    add_slot.setAttribute('class', 'add-slot')
    add_slot_btn.setAttribute('id', 'slot-btn')
    form_body_container.setAttribute('id', 'form-body-container')

    // SECTION TO APPEND CHILD FOR EACH ELEMENT CREATED
    form_body_right.appendChild(right_form_body)
    right_form_body.appendChild(right_header)
    form_body_right.appendChild(content2)
    form_body_right.appendChild(add_slot)
    add_slot.appendChild(add_slot_btn)
    form_body.appendChild(form_body_right)
    form_body_container.appendChild(form_body_left)
    form_body_container.appendChild(form_body_right)
    form_body.appendChild(form_body_container)


    // SECTION FOR INNERHTML
    right_header.innerHTML = 'Slot(s)'
    add_slot_btn.innerHTML = "+ Add slot"

    // CLICK EVENT TO ADD SLOT
    add_slot_btn.addEventListener('click', Add_slot)

    // FUNCTION TO REMOVE EACH GROUP AND DISABLE ADD SLOT BUTTON
    function removeGroup() {
        this.parentNode.parentNode.removeChild(this.parentNode);
        add_slot_btn.disabled = true;
    }

    // CALL THE REMOVEGROUP FUNCTION
    var lis = document.querySelectorAll('#form-body-container');
    var button = document.querySelectorAll('#remove_group');
    
    // LOOP THROUGH EACH BUTTON TO REMOVE GROUP
    for (var i = 0, len = lis.length; i < len; i++) {
        button[i].addEventListener('click', removeGroup);
    }

    // ADDSLOT FUNCTION FOR ADDING SLOT
    function Add_slot() {
        // CREATE ELEMENT SECTION IN THE ADD SLOT FUNCTION 
        var input_content = document.createElement('div')
        var input = document.createElement("input")
        var slot_remove = document.createElement("button")

        // SETATTRIBUTE SECTION
        slot_remove.setAttribute("id", "slot_remove")    
        input_content.setAttribute("class", "content2-input")
        input.setAttribute("type", "text")
        input.setAttribute("value", "Group_slot")

        // APPENDCHILD SECTION
        content2.appendChild(input_content)
        content2.appendChild(slot_remove)
        input_content.appendChild(input)
        input_content.appendChild(slot_remove)

        // INNERHTML SECTION
        slot_remove.innerHTML = "-"

        // FUNCTION TO REMOVE EACH SLOT CREATED
        function removeSlot() {
            this.parentNode.parentNode.removeChild(this.parentNode);
        }
        
        var lis = document.querySelectorAll('.content2-input');
        var button = document.querySelectorAll('#slot_remove');
        
        for (var i = 0, len = lis.length; i < len; i++) {
            button[i].addEventListener('click', removeSlot, false);
        }
    }
}