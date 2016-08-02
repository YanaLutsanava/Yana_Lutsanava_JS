'use strict';

function valid(val){
	return (typeof val === 'string') && (val !== '') && (/^\w+$/i.test(val));//latin lettes and digits
}
function valChild(child){
	return child.prototype===domElement.prototype || typeof child ==='string';
}

function valParent(parent){
	return parent.prototype===domElement.prototype;
}
function validAttribute(name,val){
	if (val===''){//empty string is considered to be true
		val=true;
	}
	//checking if this type valid
	return !!name && !!val &&(/^[\w\-]+$/i.test(name));//defining the type
}//!!-double negation

//methods
var domElement={ //init
	init:function(type){
		if (valid(type)){
			this.type=type;
		} else {
			throw 'Invalid type';
		}
		this.attributes=[];
		this.children=[]; //empty array
		return this;
	},

	appendChild: function(child){
		if (valChild(child)){
			this.children.push(child); // filling in the array,appending to the end of the lish of children
			child.parent=this;
		} return this;
	},

	addAttribute: function(name,val){
		if (!validAttribute(name,val)){
			throw 'Invalid attribute parameter!';
		}
		this.attributes.push({
			name:name,
			val:val
		});
		return this;
	},
	removeAttribute: function(name){
		var SearchedEl;
		var found;
		for (var i=0;i<this.attributes.length;i++){
			if (this.attributes[i].name === name){
				found =true;
				SearchedEl =i;
				this.attributes.splice(SearchedEl,1);
			}
		}
		if (!found){//if no matches found
			throw ('There are no attributes to remove!')
		}
		return this;
	},
	 get innerHTML(){
	 	var result='';//empty value
	 	var sorted=this.attributes.sort(function(attr1,attr2){
	 		return attr1.name>attr2.name;
	 	}),i;
	 	result=result+'<'+this.type+' ';
	 	for (i=0;i<sorted.length;i++){
	 		result=result+sorted[i].name+'="'+sorted[i].val+'"'; 
	 	}
	 	result=result.trim();
	 	result=result+'>';
	 	if (this.content){
	 		result=result+this.content;
	 	}
	 	for (i=0;i<this.children.length;i++){
	 		result=result+this.children[i].innerHTML;
	 	}
	 	result=result+'</'+this.type+'>';
	 	return result;
	 },

	 prototype: Object.defineProperties(this,{
	 	type:{
	 		get:function(){
	 			return this.type;
	 		},
	 		set:function(val){
	 			if (!validType(val)){
	 				throw 'Invalid type'
	 			}
	 			this.type=val;
	 		}
	 	},
	 	content:{
	 		get:function(){
	 			return this.content;
	 		},
	 		set:function(val){
	 			if (this.children.length<1){
	 				this.content=val;
	 				return this;
	 			}
	 		}
	 	},
	 	parent:{
	 		get:function(){
	 			return this.parent;
	 		},
	 		set:function(parent){
	 			if (valParent(parent)){
	 				this.parent=parent;
	 			}
	 		}
	 	}
	 })
	};

	//Example from the task
	var meta = Object.create(domElement)
        .init('meta')
        .addAttribute('charset', 'utf-8');
var head = Object.create(domElement)
        .init('head')
        .appendChild(meta)
var div = Object.create(domElement)
        .init('div')
        .addAttribute('style', 'font-size: 42px');
div.content = 'Hello, world!';
var body = Object.create(domElement)
        .init('body')
        .appendChild(div)
        .addAttribute('id', 'cuki')
        .addAttribute('bgcolor', '#012345');
var root = Object.create(domElement)
        .init('html')
        .appendChild(head)
        .appendChild(body);
console.log(root.innerHTML);
