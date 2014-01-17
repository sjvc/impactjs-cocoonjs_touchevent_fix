ig.module(
	'plugins.cocoonjs_touchevent_fix'
	)
.requires(
	'impact.input'	
	)
.defines(function() {

	ig.Input.inject({
		//Override mousemove Impact event
		mousemove: function(event){
			if (navigator.isCocoonJS){
				var ev = event.touches ? event.touches[0] : event;
				this.mouse.x = ev.pageX / ig.system.scale;
				this.mouse.y = ev.pageY / ig.system.scale;
			}
			else{
				this.parent(event);
			}
		}

	});
});