class specialHeader extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
        <div id="headerWrapperHome">
            <div class="hlogo">
                <a href="/index.html"><img src="images/yeller.png" alt="Ur Mom logo"></a>
            </div>
            <div class="navdesk">
                <a href="About.html">About</a>
                <a href="shows.html">Shows</a>
                <a href="Sounds.html">Sounds</a>
                <a href="news.html">News</a>
                <a href="Photos.html">Photos</a>
            </div>
            <div class="socialLink">
                <a href="https://open.spotify.com/artist/0P0Ej2lfhtn7yLvT3DGetp?si=b8jasZhISLGF-kAAY0tZhg" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" class="icon"><path d="M9 0c1.242 0 2.414.234 3.516.703a8.832 8.832 0 012.865 1.934 9.3 9.3 0 011.916 2.847A8.885 8.885 0 0118 9a8.797 8.797 0 01-.703 3.48 8.832 8.832 0 01-1.934 2.866 9.185 9.185 0 01-2.883 1.916A8.28 8.28 0 019 18a8.28 8.28 0 01-3.48-.738 9.185 9.185 0 01-2.883-1.916A8.832 8.832 0 01.703 12.48 8.797 8.797 0 010 9c0-1.242.234-2.414.703-3.516a9.146 9.146 0 011.934-2.847A9.036 9.036 0 015.52.703 8.633 8.633 0 019 0zm-.053 10.898c-1.465-.164-3.052-.046-4.763.352a.477.477 0 00-.334.229.518.518 0 00-.053.439c.023.14.1.252.228.334.104.066.218.09.344.073l.096-.02c1.57-.352 3.017-.457 4.342-.317 1.324.14 2.513.54 3.568 1.196.14.07.281.087.422.052a.592.592 0 00.351-.263.528.528 0 00.053-.405.472.472 0 00-.299-.334c-1.172-.726-2.49-1.171-3.955-1.336zm.211-2.9c-1.863-.223-3.615-.088-5.256.404a.576.576 0 00-.369.334.74.74 0 00-.073.411l.02.1a.49.49 0 00.3.403c.175.082.357.1.544.053 1.406-.445 2.947-.568 4.623-.369 1.676.2 3.123.662 4.342 1.389.14.117.305.152.492.105a.78.78 0 00.457-.316.689.689 0 00.07-.528c-.046-.187-.14-.316-.28-.386-1.383-.844-3.007-1.377-4.87-1.6zm.07-3.094a21.718 21.718 0 00-3.146-.017c-1.008.093-1.91.258-2.707.492a.81.81 0 00-.475.404.83.83 0 00-.052.65c.07.188.199.34.386.458a.74.74 0 00.633.07c.68-.211 1.477-.363 2.39-.457a16.95 16.95 0 012.778.017c.961.083 1.899.24 2.813.475a9.645 9.645 0 012.46.984c.212.118.434.153.669.106.234-.047.398-.152.492-.316a.85.85 0 00.088-.65.798.798 0 00-.405-.51 10.987 10.987 0 00-2.777-1.16 16.84 16.84 0 00-3.146-.546z"> </path></svg></a>
                <a href="https://music.apple.com/us/artist/ur-mom/1707984958" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 73" class="icon"><path class="st0" d="M72,19.94c0-0.72-0.01-1.45-0.03-2.17c-0.04-1.58-0.14-3.17-0.42-4.73c-0.28-1.58-0.75-3.06-1.48-4.5 c-0.72-1.41-1.66-2.71-2.78-3.83c-1.12-1.12-2.42-2.06-3.83-2.78c-1.44-0.73-2.91-1.2-4.49-1.48c-1.56-0.28-3.15-0.37-4.73-0.42 C53.51,0.02,52.78,0.01,52.06,0c-0.86,0-1.72,0-2.58,0H22.52c-0.86,0-1.72,0-2.58,0c-0.72,0-1.45,0.01-2.17,0.03 c-1.58,0.04-3.17,0.14-4.73,0.42C11.46,0.74,9.98,1.2,8.55,1.94C7.13,2.66,5.84,3.6,4.72,4.72S2.65,7.13,1.93,8.55 c-0.73,1.44-1.2,2.91-1.48,4.5c-0.28,1.56-0.37,3.15-0.42,4.73C0.02,18.5,0.01,19.22,0,19.94c0,0.86,0,1.72,0,2.58v26.95 c0,0.86,0,1.72,0,2.58c0,0.72,0.01,1.45,0.03,2.17c0.04,1.58,0.14,3.17,0.42,4.73c0.28,1.58,0.75,3.06,1.48,4.5 c0.72,1.41,1.66,2.71,2.78,3.83s2.42,2.06,3.83,2.78c1.44,0.73,2.91,1.2,4.49,1.48c1.56,0.28,3.15,0.37,4.73,0.42 c0.72,0.02,1.45,0.03,2.17,0.03c0.86,0.01,1.72,0,2.58,0h26.95c0.86,0,1.72,0,2.58,0c0.72,0,1.45-0.01,2.17-0.03 c1.58-0.04,3.17-0.14,4.73-0.42c1.58-0.28,3.06-0.75,4.49-1.48c1.41-0.72,2.71-1.66,3.83-2.78c1.12-1.12,2.06-2.41,2.78-3.83 c0.73-1.44,1.2-2.91,1.48-4.5c0.28-1.56,0.37-3.15,0.42-4.73c0.02-0.72,0.03-1.45,0.03-2.17c0.01-0.86,0-1.72,0-2.58V22.52 C72,21.66,72,20.8,72,19.94z M52.71,46.85c0,0.91-0.01,1.74-0.2,2.65c-0.19,0.89-0.53,1.72-1.05,2.47 c-0.52,0.75-1.19,1.36-1.97,1.82c-0.79,0.47-1.62,0.73-2.5,0.91c-1.66,0.33-2.79,0.41-3.86,0.2c-1.03-0.21-1.9-0.68-2.6-1.32 c-1.03-0.95-1.68-2.23-1.82-3.56c-0.16-1.57,0.36-3.24,1.53-4.48c0.59-0.62,1.34-1.11,2.34-1.5c1.04-0.4,2.19-0.65,3.96-1 c0.47-0.09,0.93-0.19,1.4-0.28c0.61-0.12,1.14-0.28,1.56-0.8c0.43-0.52,0.43-1.16,0.43-1.78V24.32c0-1.21-0.54-1.54-1.7-1.32 c-0.83,0.16-18.62,3.75-18.62,3.75c-1,0.24-1.36,0.57-1.36,1.82v23.23c0,0.91-0.05,1.74-0.24,2.65c-0.19,0.89-0.53,1.72-1.05,2.47 c-0.52,0.75-1.19,1.36-1.97,1.82c-0.79,0.47-1.62,0.74-2.5,0.92c-1.66,0.33-2.79,0.41-3.86,0.2c-1.03-0.21-1.9-0.69-2.6-1.33 c-1.03-0.95-1.63-2.23-1.78-3.56c-0.16-1.57,0.31-3.24,1.49-4.48c0.59-0.62,1.34-1.11,2.34-1.5c1.04-0.4,2.19-0.65,3.96-1 c0.47-0.09,0.93-0.19,1.4-0.28c0.61-0.12,1.14-0.28,1.56-0.8c0.42-0.52,0.47-1.13,0.47-1.75c0-4.92,0-26.78,0-26.78 c0-0.36,0.03-0.6,0.05-0.72c0.09-0.56,0.31-1.05,0.72-1.39c0.34-0.28,0.78-0.48,1.33-0.6l0.01,0L49,11.33 c0.19-0.04,1.73-0.31,1.91-0.33c1.16-0.1,1.81,0.66,1.81,1.89L52.71,46.85L52.71,46.85z"></path></svg></a>
                <a href="https://www.youtube.com/@weareurmom" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14" class="icon"><path d="M7.518.011l1.81-.01c.971.004 3.89.03 5.972.173l.355.05c.394.061.95.209 1.445.76.463.478.66 1.426.714 1.746l.017.108s.155 1.378.168 2.816L18 7.241c0 .654-.032 1.31-.068 1.84l-.1 1.172s-.17 1.274-.732 1.853c-.675.753-1.463.753-1.8.811l-.537.033c-2.11.12-4.778.138-5.547.14l-2.132-.03c-1.465-.029-3.372-.076-4.215-.143-.394-.116-1.294-.058-1.969-.81-.43-.444-.63-1.293-.7-1.668l-.031-.186S.014 8.875 0 7.437V5.654l.007-.39c.012-.45.035-.883.06-1.254l.1-1.172S.339 1.564.9.985C1.575.232 2.362.232 2.7.174l.75-.045C4.827.057 6.4.025 7.518.01zm-.973 3.262v6.545l6.546-3.273-6.546-3.272z"></path></svg></a>
                <a href="https://instagram.com/weareurmom" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" class="icon"><path fill-rule="evenodd" d="M6.955 1.628l2.582-.006c1.916.001 2.227.012 3.1.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.27.27.452.529.6.862l.073.173c.113.29.246.715.298 1.46l.03.627c.012.29.02.553.025.917l.01 2.842c-.002 1.915-.013 2.226-.053 3.099-.037.804-.163 1.272-.279 1.588l-.031.083c-.163.42-.358.72-.673 1.035-.315.315-.615.51-1.035.673-.29.113-.715.246-1.46.298l-1.21.05c-.344.007-.761.011-1.428.013l-3.255-.005a37.01 37.01 0 01-1.592-.046c-.877-.04-1.354-.187-1.67-.31a2.788 2.788 0 01-1.036-.673 2.788 2.788 0 01-.673-1.035c-.113-.29-.246-.715-.298-1.46l-.05-1.21a71.292 71.292 0 01-.013-1.428l.005-3.255c.006-.692.02-1.022.046-1.592.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.29-.113.715-.246 1.46-.298l.627-.03c.355-.015.668-.023 1.176-.028zM6.97.006h4.06c.747.007 1.09.021 1.68.048.959.044 1.613.196 2.185.419.592.23 1.094.537 1.594 1.038.5.5.808 1.002 1.038 1.594.198.509.34 1.082.4 1.876l.035.68c.026.62.036 1.093.038 2.574l-.005 2.658c-.006.844-.02 1.192-.05 1.818-.043.958-.195 1.612-.418 2.184a4.412 4.412 0 01-1.038 1.594c-.5.5-1.002.809-1.594 1.039-.509.197-1.082.34-1.876.4l-.795.039c-.53.021-1.003.03-2.193.032l-2.924-.004a39.115 39.115 0 01-1.818-.05c-.958-.043-1.612-.195-2.184-.417a4.412 4.412 0 01-1.594-1.039c-.5-.5-.809-1.002-1.039-1.594-.197-.509-.34-1.082-.4-1.876l-.042-.876C.009 11.575 0 11.027 0 9.527L.006 6.97c.007-.747.021-1.09.048-1.68.044-.959.196-1.613.418-2.185A4.412 4.412 0 011.511 1.51c.5-.5 1.002-.808 1.594-1.038.509-.198 1.082-.34 1.876-.4L5.857.03C6.177.018 6.49.01 6.97.006zm2.048 4.387a4.625 4.625 0 100 9.25 4.625 4.625 0 000-9.25zm0 1.623a3.002 3.002 0 110 6.004 3.002 3.002 0 010-6.004zm4.768-2.909a1.071 1.071 0 100 2.143 1.071 1.071 0 000-2.143z"></path></svg></a>
                <a href="https://www.facebook.com/weareurmom" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 18" class="icon"><path fill-rule="evenodd" d="M1.907 18V8.999H0V5.897h1.907V4.035C1.907 1.505 2.984 0 6.044 0h2.547v3.103H7c-1.191 0-1.27.433-1.27 1.242l-.005 1.552h2.885L8.27 9H5.724V18H1.907z"></path></svg></a>
                <a href="https://www.tiktok.com/@urmomtheband" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18" class="icon"><path fill-rule="evenodd" d="M11.281 0c.298 2.554 1.73 4.077 4.219 4.24v2.872c-1.442.14-2.706-.33-4.175-1.215v5.373c0 6.826-7.473 8.96-10.477 4.066-1.93-3.148-.748-8.672 5.444-8.894v3.03a8.99 8.99 0 00-1.437.35c-1.377.465-2.158 1.335-1.94 2.868.417 2.938 5.828 3.808 5.378-1.933V.005h2.988V0z"></path></svg></a>
            </div>
            <button class="hamburger">
                <div class="bar"></div>
            </button>
            <div class="mob-nav">
                <div class="mlogo">
                    <a href="/index.html"><img src="images/yeller.png" alt="Ur Mom logo"></a>
                </div>
                <div class="mnavdesk">
                    <a href="About.html">About</a>
                    <a href="shows.html">Shows</a>
                    <a href="Sounds.html">Sounds</a>
                    <a href="news.html">News</a>
                    <a href="Photos.html">Photos</a>
                </div>
                <div class="msocialLink">
                    <a href="https://open.spotify.com/artist/0P0Ej2lfhtn7yLvT3DGetp?si=b8jasZhISLGF-kAAY0tZhg" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" class="icon"><path d="M9 0c1.242 0 2.414.234 3.516.703a8.832 8.832 0 012.865 1.934 9.3 9.3 0 011.916 2.847A8.885 8.885 0 0118 9a8.797 8.797 0 01-.703 3.48 8.832 8.832 0 01-1.934 2.866 9.185 9.185 0 01-2.883 1.916A8.28 8.28 0 019 18a8.28 8.28 0 01-3.48-.738 9.185 9.185 0 01-2.883-1.916A8.832 8.832 0 01.703 12.48 8.797 8.797 0 010 9c0-1.242.234-2.414.703-3.516a9.146 9.146 0 011.934-2.847A9.036 9.036 0 015.52.703 8.633 8.633 0 019 0zm-.053 10.898c-1.465-.164-3.052-.046-4.763.352a.477.477 0 00-.334.229.518.518 0 00-.053.439c.023.14.1.252.228.334.104.066.218.09.344.073l.096-.02c1.57-.352 3.017-.457 4.342-.317 1.324.14 2.513.54 3.568 1.196.14.07.281.087.422.052a.592.592 0 00.351-.263.528.528 0 00.053-.405.472.472 0 00-.299-.334c-1.172-.726-2.49-1.171-3.955-1.336zm.211-2.9c-1.863-.223-3.615-.088-5.256.404a.576.576 0 00-.369.334.74.74 0 00-.073.411l.02.1a.49.49 0 00.3.403c.175.082.357.1.544.053 1.406-.445 2.947-.568 4.623-.369 1.676.2 3.123.662 4.342 1.389.14.117.305.152.492.105a.78.78 0 00.457-.316.689.689 0 00.07-.528c-.046-.187-.14-.316-.28-.386-1.383-.844-3.007-1.377-4.87-1.6zm.07-3.094a21.718 21.718 0 00-3.146-.017c-1.008.093-1.91.258-2.707.492a.81.81 0 00-.475.404.83.83 0 00-.052.65c.07.188.199.34.386.458a.74.74 0 00.633.07c.68-.211 1.477-.363 2.39-.457a16.95 16.95 0 012.778.017c.961.083 1.899.24 2.813.475a9.645 9.645 0 012.46.984c.212.118.434.153.669.106.234-.047.398-.152.492-.316a.85.85 0 00.088-.65.798.798 0 00-.405-.51 10.987 10.987 0 00-2.777-1.16 16.84 16.84 0 00-3.146-.546z"> </path></svg></a>
                    <a href="https://music.apple.com/us/artist/ur-mom/1707984958" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 73" class="icon"><path class="st0" d="M72,19.94c0-0.72-0.01-1.45-0.03-2.17c-0.04-1.58-0.14-3.17-0.42-4.73c-0.28-1.58-0.75-3.06-1.48-4.5 c-0.72-1.41-1.66-2.71-2.78-3.83c-1.12-1.12-2.42-2.06-3.83-2.78c-1.44-0.73-2.91-1.2-4.49-1.48c-1.56-0.28-3.15-0.37-4.73-0.42 C53.51,0.02,52.78,0.01,52.06,0c-0.86,0-1.72,0-2.58,0H22.52c-0.86,0-1.72,0-2.58,0c-0.72,0-1.45,0.01-2.17,0.03 c-1.58,0.04-3.17,0.14-4.73,0.42C11.46,0.74,9.98,1.2,8.55,1.94C7.13,2.66,5.84,3.6,4.72,4.72S2.65,7.13,1.93,8.55 c-0.73,1.44-1.2,2.91-1.48,4.5c-0.28,1.56-0.37,3.15-0.42,4.73C0.02,18.5,0.01,19.22,0,19.94c0,0.86,0,1.72,0,2.58v26.95 c0,0.86,0,1.72,0,2.58c0,0.72,0.01,1.45,0.03,2.17c0.04,1.58,0.14,3.17,0.42,4.73c0.28,1.58,0.75,3.06,1.48,4.5 c0.72,1.41,1.66,2.71,2.78,3.83s2.42,2.06,3.83,2.78c1.44,0.73,2.91,1.2,4.49,1.48c1.56,0.28,3.15,0.37,4.73,0.42 c0.72,0.02,1.45,0.03,2.17,0.03c0.86,0.01,1.72,0,2.58,0h26.95c0.86,0,1.72,0,2.58,0c0.72,0,1.45-0.01,2.17-0.03 c1.58-0.04,3.17-0.14,4.73-0.42c1.58-0.28,3.06-0.75,4.49-1.48c1.41-0.72,2.71-1.66,3.83-2.78c1.12-1.12,2.06-2.41,2.78-3.83 c0.73-1.44,1.2-2.91,1.48-4.5c0.28-1.56,0.37-3.15,0.42-4.73c0.02-0.72,0.03-1.45,0.03-2.17c0.01-0.86,0-1.72,0-2.58V22.52 C72,21.66,72,20.8,72,19.94z M52.71,46.85c0,0.91-0.01,1.74-0.2,2.65c-0.19,0.89-0.53,1.72-1.05,2.47 c-0.52,0.75-1.19,1.36-1.97,1.82c-0.79,0.47-1.62,0.73-2.5,0.91c-1.66,0.33-2.79,0.41-3.86,0.2c-1.03-0.21-1.9-0.68-2.6-1.32 c-1.03-0.95-1.68-2.23-1.82-3.56c-0.16-1.57,0.36-3.24,1.53-4.48c0.59-0.62,1.34-1.11,2.34-1.5c1.04-0.4,2.19-0.65,3.96-1 c0.47-0.09,0.93-0.19,1.4-0.28c0.61-0.12,1.14-0.28,1.56-0.8c0.43-0.52,0.43-1.16,0.43-1.78V24.32c0-1.21-0.54-1.54-1.7-1.32 c-0.83,0.16-18.62,3.75-18.62,3.75c-1,0.24-1.36,0.57-1.36,1.82v23.23c0,0.91-0.05,1.74-0.24,2.65c-0.19,0.89-0.53,1.72-1.05,2.47 c-0.52,0.75-1.19,1.36-1.97,1.82c-0.79,0.47-1.62,0.74-2.5,0.92c-1.66,0.33-2.79,0.41-3.86,0.2c-1.03-0.21-1.9-0.69-2.6-1.33 c-1.03-0.95-1.63-2.23-1.78-3.56c-0.16-1.57,0.31-3.24,1.49-4.48c0.59-0.62,1.34-1.11,2.34-1.5c1.04-0.4,2.19-0.65,3.96-1 c0.47-0.09,0.93-0.19,1.4-0.28c0.61-0.12,1.14-0.28,1.56-0.8c0.42-0.52,0.47-1.13,0.47-1.75c0-4.92,0-26.78,0-26.78 c0-0.36,0.03-0.6,0.05-0.72c0.09-0.56,0.31-1.05,0.72-1.39c0.34-0.28,0.78-0.48,1.33-0.6l0.01,0L49,11.33 c0.19-0.04,1.73-0.31,1.91-0.33c1.16-0.1,1.81,0.66,1.81,1.89L52.71,46.85L52.71,46.85z"></path></svg></a>
                    <a href="https://www.youtube.com/@weareurmom" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14" class="icon"><path d="M7.518.011l1.81-.01c.971.004 3.89.03 5.972.173l.355.05c.394.061.95.209 1.445.76.463.478.66 1.426.714 1.746l.017.108s.155 1.378.168 2.816L18 7.241c0 .654-.032 1.31-.068 1.84l-.1 1.172s-.17 1.274-.732 1.853c-.675.753-1.463.753-1.8.811l-.537.033c-2.11.12-4.778.138-5.547.14l-2.132-.03c-1.465-.029-3.372-.076-4.215-.143-.394-.116-1.294-.058-1.969-.81-.43-.444-.63-1.293-.7-1.668l-.031-.186S.014 8.875 0 7.437V5.654l.007-.39c.012-.45.035-.883.06-1.254l.1-1.172S.339 1.564.9.985C1.575.232 2.362.232 2.7.174l.75-.045C4.827.057 6.4.025 7.518.01zm-.973 3.262v6.545l6.546-3.273-6.546-3.272z"></path></svg></a>
                    <a href="https://instagram.com/weareurmom" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" class="icon"><path fill-rule="evenodd" d="M6.955 1.628l2.582-.006c1.916.001 2.227.012 3.1.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.27.27.452.529.6.862l.073.173c.113.29.246.715.298 1.46l.03.627c.012.29.02.553.025.917l.01 2.842c-.002 1.915-.013 2.226-.053 3.099-.037.804-.163 1.272-.279 1.588l-.031.083c-.163.42-.358.72-.673 1.035-.315.315-.615.51-1.035.673-.29.113-.715.246-1.46.298l-1.21.05c-.344.007-.761.011-1.428.013l-3.255-.005a37.01 37.01 0 01-1.592-.046c-.877-.04-1.354-.187-1.67-.31a2.788 2.788 0 01-1.036-.673 2.788 2.788 0 01-.673-1.035c-.113-.29-.246-.715-.298-1.46l-.05-1.21a71.292 71.292 0 01-.013-1.428l.005-3.255c.006-.692.02-1.022.046-1.592.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.29-.113.715-.246 1.46-.298l.627-.03c.355-.015.668-.023 1.176-.028zM6.97.006h4.06c.747.007 1.09.021 1.68.048.959.044 1.613.196 2.185.419.592.23 1.094.537 1.594 1.038.5.5.808 1.002 1.038 1.594.198.509.34 1.082.4 1.876l.035.68c.026.62.036 1.093.038 2.574l-.005 2.658c-.006.844-.02 1.192-.05 1.818-.043.958-.195 1.612-.418 2.184a4.412 4.412 0 01-1.038 1.594c-.5.5-1.002.809-1.594 1.039-.509.197-1.082.34-1.876.4l-.795.039c-.53.021-1.003.03-2.193.032l-2.924-.004a39.115 39.115 0 01-1.818-.05c-.958-.043-1.612-.195-2.184-.417a4.412 4.412 0 01-1.594-1.039c-.5-.5-.809-1.002-1.039-1.594-.197-.509-.34-1.082-.4-1.876l-.042-.876C.009 11.575 0 11.027 0 9.527L.006 6.97c.007-.747.021-1.09.048-1.68.044-.959.196-1.613.418-2.185A4.412 4.412 0 011.511 1.51c.5-.5 1.002-.808 1.594-1.038.509-.198 1.082-.34 1.876-.4L5.857.03C6.177.018 6.49.01 6.97.006zm2.048 4.387a4.625 4.625 0 100 9.25 4.625 4.625 0 000-9.25zm0 1.623a3.002 3.002 0 110 6.004 3.002 3.002 0 010-6.004zm4.768-2.909a1.071 1.071 0 100 2.143 1.071 1.071 0 000-2.143z"></path></svg></a>
                <a href="https://www.facebook.com/weareurmom" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 18" class="icon"><path fill-rule="evenodd" d="M1.907 18V8.999H0V5.897h1.907V4.035C1.907 1.505 2.984 0 6.044 0h2.547v3.103H7c-1.191 0-1.27.433-1.27 1.242l-.005 1.552h2.885L8.27 9H5.724V18H1.907z"></path></svg></a>
                <a href="https://www.tiktok.com/@urmomtheband" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18" class="icon"><path fill-rule="evenodd" d="M11.281 0c.298 2.554 1.73 4.077 4.219 4.24v2.872c-1.442.14-2.706-.33-4.175-1.215v5.373c0 6.826-7.473 8.96-10.477 4.066-1.93-3.148-.748-8.672 5.444-8.894v3.03a8.99 8.99 0 00-1.437.35c-1.377.465-2.158 1.335-1.94 2.868.417 2.938 5.828 3.808 5.378-1.933V.005h2.988V0z"></path></svg></a>
                </div>
            </div>
        </div>
        `
    }
}

class specialFooter extends HTMLElement{
    connectedCallback() {
        this.innerHTML = `
            <div id="footerWrapper">
            <div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css">
  <style type="text/css">
        #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: px;}
        /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
           We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
</style>
<div id="mc_embed_signup">
    <form action="https://gmail.us13.list-manage.com/subscribe/post?u=dc17c244faeafae6805b365ab&amp;id=b1492a0352&amp;f_id=00ffd8e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
        <div id="mc_embed_signup_scroll"><h2>Subscribe to our Mailing List</h2>
            <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
            <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" name="EMAIL" class="required email" id="mce-EMAIL" required="" value=""></div>
        <div id="mce-responses" class="clear foot">
            <div class="response" id="mce-error-response" style="display: none;"></div>
            <div class="response" id="mce-success-response" style="display: none;"></div>
        </div>
    <div aria-hidden="true" style="position: absolute; left: -5000px;">
        /* real people should not fill this in and expect good things - do not remove this or risk form bot signups */
        <input type="text" name="b_dc17c244faeafae6805b365ab_b1492a0352" tabindex="-1" value="">
    </div>
        <div class="optionalParent">
            <div class="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" class="button" value="Subscribe">
                <p style="margin: 0px auto;"><a href="http://eepurl.com/iXg-wU" title="Mailchimp - email marketing made easy and fun"><span style="display: inline-block; background-color: transparent; border-radius: 4px;"><img class="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_usimages/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style="width: 220px; height: 40px; display: flex; padding: 2px 0px; justify-content: center; align-items: center;"></span></a></p>
            </div>
        </div>
    </div>
</form>
</div>
<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script></div>
            <div class="cptou">
                <ul>
                    <a href="/About.html#contactUs"><li>Contact</li></a>
                    <a href="/privacy-policy.html"><li>Privacy Policy</li></a>
                </ul>
            </div>
            <div class="socialLink">
                <a href="https://open.spotify.com/artist/0P0Ej2lfhtn7yLvT3DGetp?si=b8jasZhISLGF-kAAY0tZhg" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" class="icon"><path d="M9 0c1.242 0 2.414.234 3.516.703a8.832 8.832 0 012.865 1.934 9.3 9.3 0 011.916 2.847A8.885 8.885 0 0118 9a8.797 8.797 0 01-.703 3.48 8.832 8.832 0 01-1.934 2.866 9.185 9.185 0 01-2.883 1.916A8.28 8.28 0 019 18a8.28 8.28 0 01-3.48-.738 9.185 9.185 0 01-2.883-1.916A8.832 8.832 0 01.703 12.48 8.797 8.797 0 010 9c0-1.242.234-2.414.703-3.516a9.146 9.146 0 011.934-2.847A9.036 9.036 0 015.52.703 8.633 8.633 0 019 0zm-.053 10.898c-1.465-.164-3.052-.046-4.763.352a.477.477 0 00-.334.229.518.518 0 00-.053.439c.023.14.1.252.228.334.104.066.218.09.344.073l.096-.02c1.57-.352 3.017-.457 4.342-.317 1.324.14 2.513.54 3.568 1.196.14.07.281.087.422.052a.592.592 0 00.351-.263.528.528 0 00.053-.405.472.472 0 00-.299-.334c-1.172-.726-2.49-1.171-3.955-1.336zm.211-2.9c-1.863-.223-3.615-.088-5.256.404a.576.576 0 00-.369.334.74.74 0 00-.073.411l.02.1a.49.49 0 00.3.403c.175.082.357.1.544.053 1.406-.445 2.947-.568 4.623-.369 1.676.2 3.123.662 4.342 1.389.14.117.305.152.492.105a.78.78 0 00.457-.316.689.689 0 00.07-.528c-.046-.187-.14-.316-.28-.386-1.383-.844-3.007-1.377-4.87-1.6zm.07-3.094a21.718 21.718 0 00-3.146-.017c-1.008.093-1.91.258-2.707.492a.81.81 0 00-.475.404.83.83 0 00-.052.65c.07.188.199.34.386.458a.74.74 0 00.633.07c.68-.211 1.477-.363 2.39-.457a16.95 16.95 0 012.778.017c.961.083 1.899.24 2.813.475a9.645 9.645 0 012.46.984c.212.118.434.153.669.106.234-.047.398-.152.492-.316a.85.85 0 00.088-.65.798.798 0 00-.405-.51 10.987 10.987 0 00-2.777-1.16 16.84 16.84 0 00-3.146-.546z"> </path></svg></a>
                <a href="https://music.apple.com/us/artist/ur-mom/1707984958" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 73 73" class="icon"><path class="st0" d="M72,19.94c0-0.72-0.01-1.45-0.03-2.17c-0.04-1.58-0.14-3.17-0.42-4.73c-0.28-1.58-0.75-3.06-1.48-4.5 c-0.72-1.41-1.66-2.71-2.78-3.83c-1.12-1.12-2.42-2.06-3.83-2.78c-1.44-0.73-2.91-1.2-4.49-1.48c-1.56-0.28-3.15-0.37-4.73-0.42 C53.51,0.02,52.78,0.01,52.06,0c-0.86,0-1.72,0-2.58,0H22.52c-0.86,0-1.72,0-2.58,0c-0.72,0-1.45,0.01-2.17,0.03 c-1.58,0.04-3.17,0.14-4.73,0.42C11.46,0.74,9.98,1.2,8.55,1.94C7.13,2.66,5.84,3.6,4.72,4.72S2.65,7.13,1.93,8.55 c-0.73,1.44-1.2,2.91-1.48,4.5c-0.28,1.56-0.37,3.15-0.42,4.73C0.02,18.5,0.01,19.22,0,19.94c0,0.86,0,1.72,0,2.58v26.95 c0,0.86,0,1.72,0,2.58c0,0.72,0.01,1.45,0.03,2.17c0.04,1.58,0.14,3.17,0.42,4.73c0.28,1.58,0.75,3.06,1.48,4.5 c0.72,1.41,1.66,2.71,2.78,3.83s2.42,2.06,3.83,2.78c1.44,0.73,2.91,1.2,4.49,1.48c1.56,0.28,3.15,0.37,4.73,0.42 c0.72,0.02,1.45,0.03,2.17,0.03c0.86,0.01,1.72,0,2.58,0h26.95c0.86,0,1.72,0,2.58,0c0.72,0,1.45-0.01,2.17-0.03 c1.58-0.04,3.17-0.14,4.73-0.42c1.58-0.28,3.06-0.75,4.49-1.48c1.41-0.72,2.71-1.66,3.83-2.78c1.12-1.12,2.06-2.41,2.78-3.83 c0.73-1.44,1.2-2.91,1.48-4.5c0.28-1.56,0.37-3.15,0.42-4.73c0.02-0.72,0.03-1.45,0.03-2.17c0.01-0.86,0-1.72,0-2.58V22.52 C72,21.66,72,20.8,72,19.94z M52.71,46.85c0,0.91-0.01,1.74-0.2,2.65c-0.19,0.89-0.53,1.72-1.05,2.47 c-0.52,0.75-1.19,1.36-1.97,1.82c-0.79,0.47-1.62,0.73-2.5,0.91c-1.66,0.33-2.79,0.41-3.86,0.2c-1.03-0.21-1.9-0.68-2.6-1.32 c-1.03-0.95-1.68-2.23-1.82-3.56c-0.16-1.57,0.36-3.24,1.53-4.48c0.59-0.62,1.34-1.11,2.34-1.5c1.04-0.4,2.19-0.65,3.96-1 c0.47-0.09,0.93-0.19,1.4-0.28c0.61-0.12,1.14-0.28,1.56-0.8c0.43-0.52,0.43-1.16,0.43-1.78V24.32c0-1.21-0.54-1.54-1.7-1.32 c-0.83,0.16-18.62,3.75-18.62,3.75c-1,0.24-1.36,0.57-1.36,1.82v23.23c0,0.91-0.05,1.74-0.24,2.65c-0.19,0.89-0.53,1.72-1.05,2.47 c-0.52,0.75-1.19,1.36-1.97,1.82c-0.79,0.47-1.62,0.74-2.5,0.92c-1.66,0.33-2.79,0.41-3.86,0.2c-1.03-0.21-1.9-0.69-2.6-1.33 c-1.03-0.95-1.63-2.23-1.78-3.56c-0.16-1.57,0.31-3.24,1.49-4.48c0.59-0.62,1.34-1.11,2.34-1.5c1.04-0.4,2.19-0.65,3.96-1 c0.47-0.09,0.93-0.19,1.4-0.28c0.61-0.12,1.14-0.28,1.56-0.8c0.42-0.52,0.47-1.13,0.47-1.75c0-4.92,0-26.78,0-26.78 c0-0.36,0.03-0.6,0.05-0.72c0.09-0.56,0.31-1.05,0.72-1.39c0.34-0.28,0.78-0.48,1.33-0.6l0.01,0L49,11.33 c0.19-0.04,1.73-0.31,1.91-0.33c1.16-0.1,1.81,0.66,1.81,1.89L52.71,46.85L52.71,46.85z"></path></svg></a>
                <a href="https://www.youtube.com/@weareurmom" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 14" class="icon"><path d="M7.518.011l1.81-.01c.971.004 3.89.03 5.972.173l.355.05c.394.061.95.209 1.445.76.463.478.66 1.426.714 1.746l.017.108s.155 1.378.168 2.816L18 7.241c0 .654-.032 1.31-.068 1.84l-.1 1.172s-.17 1.274-.732 1.853c-.675.753-1.463.753-1.8.811l-.537.033c-2.11.12-4.778.138-5.547.14l-2.132-.03c-1.465-.029-3.372-.076-4.215-.143-.394-.116-1.294-.058-1.969-.81-.43-.444-.63-1.293-.7-1.668l-.031-.186S.014 8.875 0 7.437V5.654l.007-.39c.012-.45.035-.883.06-1.254l.1-1.172S.339 1.564.9.985C1.575.232 2.362.232 2.7.174l.75-.045C4.827.057 6.4.025 7.518.01zm-.973 3.262v6.545l6.546-3.273-6.546-3.272z"></path></svg></a>
                <a href="https://instagram.com/weareurmom" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" class="icon"><path fill-rule="evenodd" d="M6.955 1.628l2.582-.006c1.916.001 2.227.012 3.1.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.27.27.452.529.6.862l.073.173c.113.29.246.715.298 1.46l.03.627c.012.29.02.553.025.917l.01 2.842c-.002 1.915-.013 2.226-.053 3.099-.037.804-.163 1.272-.279 1.588l-.031.083c-.163.42-.358.72-.673 1.035-.315.315-.615.51-1.035.673-.29.113-.715.246-1.46.298l-1.21.05c-.344.007-.761.011-1.428.013l-3.255-.005a37.01 37.01 0 01-1.592-.046c-.877-.04-1.354-.187-1.67-.31a2.788 2.788 0 01-1.036-.673 2.788 2.788 0 01-.673-1.035c-.113-.29-.246-.715-.298-1.46l-.05-1.21a71.292 71.292 0 01-.013-1.428l.005-3.255c.006-.692.02-1.022.046-1.592.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.29-.113.715-.246 1.46-.298l.627-.03c.355-.015.668-.023 1.176-.028zM6.97.006h4.06c.747.007 1.09.021 1.68.048.959.044 1.613.196 2.185.419.592.23 1.094.537 1.594 1.038.5.5.808 1.002 1.038 1.594.198.509.34 1.082.4 1.876l.035.68c.026.62.036 1.093.038 2.574l-.005 2.658c-.006.844-.02 1.192-.05 1.818-.043.958-.195 1.612-.418 2.184a4.412 4.412 0 01-1.038 1.594c-.5.5-1.002.809-1.594 1.039-.509.197-1.082.34-1.876.4l-.795.039c-.53.021-1.003.03-2.193.032l-2.924-.004a39.115 39.115 0 01-1.818-.05c-.958-.043-1.612-.195-2.184-.417a4.412 4.412 0 01-1.594-1.039c-.5-.5-.809-1.002-1.039-1.594-.197-.509-.34-1.082-.4-1.876l-.042-.876C.009 11.575 0 11.027 0 9.527L.006 6.97c.007-.747.021-1.09.048-1.68.044-.959.196-1.613.418-2.185A4.412 4.412 0 011.511 1.51c.5-.5 1.002-.808 1.594-1.038.509-.198 1.082-.34 1.876-.4L5.857.03C6.177.018 6.49.01 6.97.006zm2.048 4.387a4.625 4.625 0 100 9.25 4.625 4.625 0 000-9.25zm0 1.623a3.002 3.002 0 110 6.004 3.002 3.002 0 010-6.004zm4.768-2.909a1.071 1.071 0 100 2.143 1.071 1.071 0 000-2.143z"></path></svg></a>
                <a href="https://www.facebook.com/weareurmom" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 18" class="icon"><path fill-rule="evenodd" d="M1.907 18V8.999H0V5.897h1.907V4.035C1.907 1.505 2.984 0 6.044 0h2.547v3.103H7c-1.191 0-1.27.433-1.27 1.242l-.005 1.552h2.885L8.27 9H5.724V18H1.907z"></path></svg></a>
                <a href="https://www.tiktok.com/@urmomtheband" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18" class="icon"><path fill-rule="evenodd" d="M11.281 0c.298 2.554 1.73 4.077 4.219 4.24v2.872c-1.442.14-2.706-.33-4.175-1.215v5.373c0 6.826-7.473 8.96-10.477 4.066-1.93-3.148-.748-8.672 5.444-8.894v3.03a8.99 8.99 0 00-1.437.35c-1.377.465-2.158 1.335-1.94 2.868.417 2.938 5.828 3.808 5.378-1.933V.005h2.988V0z"></path></svg></a>
            </div>
            <div class="homeNav">
                <a href="/index.html"><img src="images/logobasic.png" alt="Ur Mom Home Button" class="homeLogo"></a>
            </div>
        </div>
        
        `
    }
}
customElements.define('my-header',specialHeader)
customElements.define('my-footer',specialFooter)




