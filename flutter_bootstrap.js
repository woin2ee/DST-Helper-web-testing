{ { flutter_js } }
{ { flutter_build_config } }

const searchParams = new URLSearchParams(window.location.search);
const renderer = searchParams.get('renderer');
const userConfig = {
    renderer: renderer || '',
    canvasKitVariant: 'auto',
    canvasKitMaximumSurfaces: getCanvasKitMaximumSurfaces(),
};

function getCanvasKitMaximumSurfaces() {
    const memory = navigator.deviceMemory || 4;
    const cpuCores = navigator.hardwareConcurrency || 2;

    if (memory <= 2 || cpuCores <= 2) {
        return 2; // Low-end device
    } else if (memory >= 8 && cpuCores >= 6) {
        return 8; // High-end device
    } else {
        return 4; // Medium-range device
    }
}

_flutter.loader.load(
    {
        serviceWorkerSettings: {
            serviceWorkerVersion: "4199262647"
        },
        config: userConfig,
    }
);