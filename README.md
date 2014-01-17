Impact CocoonJS touch event fix
================================

Plugin for ImpactJS: fixes touch events when running using CocoonJS

# Installation

* Move cocoonjs_touchevent_fix.js to your ImpactJS project's plugin folder: ``[PROJECT]/lib/plugins/cocoonjs_touchevent_fix.js``
* Add the plugin to your main.js file
<pre>
    ig.module(
        'game.main'
    )
    .requires(
        'impact-game',
        ...
        'plugins.cocoonjs_touchevent_fix',
        ...
    )
</pre>
* Now touch events are working correctly in CocoonJS (and also in web browsers, of course)