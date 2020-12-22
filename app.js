(function () {
    var OSName = "unknown";
    if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
    if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
    if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
    if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

    $('#os-name').text(OSName);

    var repo = 'https://github.com/bgrabitmap/lazpaint/releases/download/'
    var version = '7.1.6'

    document.getElementById('download').innerHTML = `Download LazPaint ${version}`
    document.getElementById('link_win32_no_install').setAttribute('href', `${repo}v${version}/lazpaint${version}_win32_no_install.zip`)
    document.getElementById('link_win64_no_install').setAttribute('href', `${repo}v${version}/lazpaint${version}_win64_no_install.zip`)
    document.getElementById('link_installer_win32_win64').setAttribute('href', `${repo}v${version}/lazpaint${version}_setup_win32_win64.exe`)
    document.getElementById('link_linux32_no_install').setAttribute('href', `${repo}v${version}/lazpaint${version}_linux32_no_install.tar.gz`)
    document.getElementById('link_linux64_no_install').setAttribute('href', `${repo}v${version}/lazpaint${version}_linux64_no_install.tar.gz`)
    document.getElementById('link_linux32_deb').setAttribute('href', `${repo}v${version}/lazpaint${version}_linux32.deb`)
    document.getElementById('link_linux64_deb').setAttribute('href', `${repo}v${version}/lazpaint${version}_linux64.deb`)
    document.getElementById('link_macos32_dmg').setAttribute('href', `${repo}v${version}/lazpaint${version}_macos32.dmg`)
    document.getElementById('link_macos64_dmg').setAttribute('href', `${repo}v${version}/lazpaint${version}_macos64.dmg`)
})();
