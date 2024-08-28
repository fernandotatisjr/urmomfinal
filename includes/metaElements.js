class metaElements extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-21BM2L53NQ"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
                
              gtag('config', 'G-21BM2L53NQ');
            </script>
            <meta content="IE=edge" http-equiv="X-UA-Compatible">
            <meta content="width=device-width,initial-scale=1.0,maximum-scale=1" name="viewport">
            <meta content="telephone=no" name="format-detection">
            <meta http-equiv="content-type" content="text/html; charset=utf-8"></meta>`
    }
}

customElements.define('meta-elements',metaElements)