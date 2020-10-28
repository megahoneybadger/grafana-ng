export class PixelHelper {
    static alignPixel(chart, pixel, width) {
        var devicePixelRatio = chart.currentDevicePixelRatio;
        var halfWidth = width / 2;
        return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
    }
    ;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGl4ZWwtaGVscGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vYXBwL3BsdWdpbnMvd2lkZ2V0cy9jaGFydC9zcmMvdmlldy9oZWxwZXJzL3BpeGVsLWhlbHBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxNQUFNLE9BQU8sV0FBVztJQUNoQixNQUFNLENBQUMsVUFBVSxDQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSztRQUM1QyxJQUFJLGdCQUFnQixHQUFHLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQztRQUNyRCxJQUFJLFNBQVMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztJQUMxRixDQUFDO0lBQUEsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBQaXhlbEhlbHBlciB7XHJcblx0cHVibGljIHN0YXRpYyBhbGlnblBpeGVsKCBjaGFydCwgcGl4ZWwsIHdpZHRoKSB7XHJcblx0XHR2YXIgZGV2aWNlUGl4ZWxSYXRpbyA9IGNoYXJ0LmN1cnJlbnREZXZpY2VQaXhlbFJhdGlvO1xyXG5cdFx0dmFyIGhhbGZXaWR0aCA9IHdpZHRoIC8gMjtcclxuXHRcdHJldHVybiBNYXRoLnJvdW5kKChwaXhlbCAtIGhhbGZXaWR0aCkgKiBkZXZpY2VQaXhlbFJhdGlvKSAvIGRldmljZVBpeGVsUmF0aW8gKyBoYWxmV2lkdGg7XHJcblx0fTtcclxufVxyXG4iXX0=