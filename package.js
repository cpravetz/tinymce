Package.describe({
    name: 'salmanhasni:tinymce',
      version: '5.0.21',
      summary: "tinymce library",
      git: 'https://github.com/salmanhasni/tinymce.git',
      documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('2.3');
    // client files
    api.addFiles([
        // core files
        'tinymce.min.js',
        // plugins
        'plugins/advlist/plugin.min.js',
        'plugins/autoresize/plugin.min.js',
        'plugins/charmap/plugin.min.js',
        'plugins/colorpicker/plugin.min.js',
        'plugins/emoticons/js/emojis.min.js',
        'plugins/emoticons/plugin.min.js',
        'plugins/fullpage/plugin.min.js',
        'plugins/image/plugin.min.js',
        'plugins/insertdatetime/plugin.min.js',
        'plugins/lists/plugin.min.js',
        'plugins/noneditable/plugin.min.js',
        'plugins/preview/plugin.min.js',
        'plugins/searchreplace/plugin.min.js',
        'plugins/table/plugin.min.js',
        'plugins/textpattern/plugin.min.js',
        'plugins/visualchars/plugin.min.js',
        'plugins/anchor/plugin.min.js',
        'plugins/autosave/plugin.min.js',
        'plugins/code/plugin.min.js',
        'plugins/contextmenu/plugin.min.js',
        // 'plugins/example/plugin.min.js',
        'plugins/fullscreen/plugin.min.js',
        'plugins/help/plugin.min.js',
        'plugins/imagetools/plugin.min.js',
        'plugins/legacyoutput/plugin.min.js',
        'plugins/media/plugin.min.js',
        'plugins/pagebreak/plugin.min.js',
        'plugins/print/plugin.min.js',
        'plugins/quickbars/plugin.min.js',
        'plugins/spellchecker/plugin.min.js',
        'plugins/template/plugin.min.js',
        'plugins/toc/plugin.min.js',
        'plugins/wordcount/plugin.min.js',
        'plugins/autolink/plugin.min.js',
        'plugins/bbcode/plugin.min.js',
        'plugins/codesample/plugin.min.js',
        'plugins/directionality/plugin.min.js',
        // 'plugins/example_dependency/plugin.min.js',
        'plugins/hr/plugin.min.js',
        'plugins/importcss/plugin.min.js',
        'plugins/link/plugin.min.js',
        'plugins/nonbreaking/plugin.min.js',
        'plugins/paste/plugin.min.js',
        'plugins/save/plugin.min.js',
        'plugins/tabfocus/plugin.min.js',
        'plugins/textcolor/plugin.min.js',
        'plugins/visualblocks/plugin.min.js',

        // themes
        'themes/mobile/theme.min.js',
        'themes/silver/theme.min.js'
    ], 'client');

    api.addAssets([
        // skins
        'skins/content/default/content.min.css',
        'skins/content/document/content.min.css',
        'skins/content/writer/content.min.css',

        'skins/ui/oxide/fonts/tinymce-mobile.woff',
        'skins/ui/oxide/content.inline.min.css',
        'skins/ui/oxide/content.min.css',
        'skins/ui/oxide/content.mobile.min.css',
        'skins/ui/oxide/skin.min.css',
        'skins/ui/oxide/skin.mobile.min.css',

        'skins/ui/oxide-dark/fonts/tinymce-mobile.woff',
        'skins/ui/oxide-dark/content.inline.min.css',
        'skins/ui/oxide-dark/content.min.css',
        'skins/ui/oxide-dark/content.mobile.min.css',
        'skins/ui/oxide-dark/skin.min.css',
        'skins/ui/oxide-dark/skin.mobile.min.css'
    ], 'client');
});
