for (let i = 1; i < 13; i++) {
    document.getElementById('num' + i).onclick = function () {
        let modal = document.getElementById('modal' + i);
        let mcon = document.getElementById('mcon' + i);
        let mtitle = document.getElementById('title' + i);
        let mcap = document.getElementById('cap' + i);
        let msent = document.getElementById('sent' + i);
        // let mli = document.getElementById('li' + i);
        // let mtext = document.getElementById('text' + i);
        let mimage = document.getElementById('image' + i);
        let closeBtn = document.getElementById('closeBtn' + i);
        let body = document.body;
        let main = document.getElementById('main');
        modal.classList.remove('modalWrap');
        modal.classList.add('modalOpen');
        mcon.classList.add('modalCon');
        mcon.classList.remove('modalWrap');
        mtitle.classList.add('modalTtl');
        mtitle.classList.remove('modalWrap');
        mcap.classList.add('modalCap');
        mcap.classList.remove('modalWrap');
        msent.classList.add('modalSent');
        msent.classList.remove('modalWrap');
        // mli.classList.add('modalLi');
        // mli.classList.remove('modalWrap');
        mimage.classList.add('modalCover');
        mimage.classList.remove('modalWrap');
        // mtext.classList.add('modalText');
        // mtext.classList.remove('modalWrap');
        closeBtn.classList.add('modalCloseBtn');
        closeBtn.classList.remove('modalWrap');
        body.style.overflow = 'hidden';
        main.style.overflow = 'hidden';
        main.style.opacity = '0.5';
        main.style.filter = 'blur(3px)';
        closePopUp(closeBtn);
        function closePopUp(elem) {
            if (!elem) return;
            elem.addEventListener('click', function () {
                modal.classList.remove('modalOpen');
                modal.classList.add('modalWarp');
                mcon.classList.remove('modalCon');
                mcon.classList.add('modalWrap');
                mtitle.classList.remove('modalTtl');
                mtitle.classList.add('modalWrap');
                mcap.classList.remove('modalCap');
                mcap.classList.add('modalWrap');
                msent.classList.remove('modalSent');
                msent.classList.add('modalWrap');
                // mli.classList.remove('modalLi');
                // mli.classList.add('modalWrap');
                mimage.classList.remove('modalCover');
                mimage.classList.add('modalWrap');
                // mtext.classList.remove('modalText');
                // mtext.classList.add('modalWrap');
                closeBtn.classList.remove('modalCloseBtn');
                closeBtn.classList.add('modalWrap');
                body.style.overflow = 'visible';
                main.style.overflow = 'visible';
                main.style.opacity = '1.0';
                main.style.filter = 'blur(0px)';
            })
        }
    };
}