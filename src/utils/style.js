export function style(scss, activePage, activeButton, activeFetch) {
    return function styleButton1(value) {
        if (activeFetch) {
            if (activePage === value) {
                if (activeButton === value) {
                    return [
                        scss.buttonMenuResource,
                        scss.buttonMenuResourceActive,
                        scss.buttonMenuResourceSelect,
                    ].join(' ');
                } else {
                    return [
                        scss.buttonMenuResource,
                        scss.buttonMenuResourceActive,
                    ].join(' ');
                }
            } else {
                if (activeButton === value) {
                    return [
                        scss.buttonMenuResource,
                        scss.buttonMenuResourceSelectFetch,
                    ].join(' ');
                } else {
                    return [scss.buttonMenuResource].join(' ');
                }
            }
        } else {
            if (activePage === value) {
                if (activeButton === value) {
                    return [
                        scss.buttonMenuResource,
                        scss.buttonMenuResourceActive,
                        scss.buttonMenuResourceSelect,
                    ].join(' ');
                } else {
                    return [
                        scss.buttonMenuResource,
                        scss.buttonMenuResourceActive,
                    ].join(' ');
                }
            } else {
                if (activeButton === value) {
                    return [
                        scss.buttonMenuResource,
                        scss.buttonMenuResourceSelect,
                    ].join(' ');
                } else {
                    return [scss.buttonMenuResource].join(' ');
                }
            }
        }
    };
}
