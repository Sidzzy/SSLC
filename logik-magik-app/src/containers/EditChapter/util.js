export const editChapterOptions = {
    autoLink: true,
    delay: 1000,
    targetBlank: true,
    toolbar: {
        buttons: [
        'bold', 
        'italic', 
        'quote', 
        'underline', 
        'anchor', 
        'h1',
        'h2', 
        'h3',
        'h4',
        'h5',
        'h6',
        'strikethrough',
        'subscript',
        'superscript',
        'pre',
        'image',
        'html',
        'justifyCenter'
        ],
        diffLeft: 25,
        diffTop: 10,
    },
    anchor: {
        placeholderText: 'Type a link',
        customClassOption: 'btn',
        customClassOptionText: 'Create Button'
    },
    paste: {
        cleanPastedHTML: true,
        cleanAttrs: ['style', 'dir'],
        cleanTags: ['label', 'meta'],
        unwrapTags: ['sub', 'sup']
    },
    anchorPreview: {
        hideDelay: 300
    },
    // placeholder: {
    //     text: 'Tell your story...'
    // }
}

export const dumbContent = `<p>COURSE NAME</p><p><b>REPORT TITLE</b></p><p>LOREM IPSUM DOLOR SIT AMET</p><h1><img title="Placeholder image" src="https://lh5.googleusercontent.com/EVzNiVIL10Wh8XVbOiFnqCxB64c-KrNXMNFNXfYvpJH7KU8JXjC2SIB5z9SkzBNLsW7qR8byS6Ij_-3Hx7F7vGobwsii0Rp1Z8Zp906FWM6krTn8iw9s9BeYX_B5H4NPz8BwBzgG" width="623" height="445"></h1><h1><b>Introduction</b></h1><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.</p><h2><b>Lorem ipsum</b></h2><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p><h3><b>Dolor sit amet</b></h3><p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan.</p>`

export const dumbContentAssignment = '<ul><li><p role="presentation">Given an array of length n, containing numbers from 1 to n. </p></li></ul><p>All the elements are distinct. Find the kth smallest number.</p><p>vector&lt;int&gt; func(vector&lt;int&gt; a) {</p><p>    int n=a.size();</p><p>    int kth_smallest;</p><p>    for(int i=0; i&lt;n; i++){</p><p>        int mn=INT_MAX;</p><p>        for(int j=0; j&lt;a.size(); j++){</p><p>            if(a[j]&lt;mx)</p><p>                mn = a[j];</p><p>        }</p><p>        a.remove(a.begin(), a.end(), mn);</p><p>        if(i==(k-1))</p><p>            kth_smallest = mn;</p><p>    }</p><p>    return kth_smallest;</p><p>}</p>'