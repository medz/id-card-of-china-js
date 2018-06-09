import { Identity } from "../src/identity";
import { Region } from "../src/region";

test("Test legal", function () {
    expect((new Identity('350301198906180060')).legal()).toBe(true);
    expect((new Identity('350301198906180062')).legal()).toBe(false);
    expect((new Identity('350101198906180060')).legal()).toBe(false);
});

test("Test birthday", function () {
    expect((new Identity("51100019921108")).birthday()).toBe("1992-11-08");
});

test("Test gender", function () {
    expect((new Identity("0000000000000000000")).gender()).toBe("女");
    expect((new Identity("0000000000000000100")).gender()).toBe("男");
    expect((new Identity("0000000000000000200")).gender()).toBe("女");
    expect((new Identity("0000000000000000300")).gender()).toBe("男");
    expect((new Identity("0000000000000000400")).gender()).toBe("女");
    expect((new Identity("0000000000000000500")).gender()).toBe("男");
    expect((new Identity("0000000000000000600")).gender()).toBe("女");
    expect((new Identity("0000000000000000700")).gender()).toBe("男");
    expect((new Identity("0000000000000000800")).gender()).toBe("女");
    expect((new Identity("0000000000000000900")).gender()).toBe("男");
});

test("Test region", function () {
    expect((new Identity("511304")).region() instanceof Region).toBe(true);
});
