import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { StrictMode } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import About from "@/portfolio/components/About";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("hero visitor counter", () => {
  it("increments once and displays the returned total", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockResolvedValue(
      new Response(JSON.stringify({ count: 42 }), { status: 200, headers: { "Content-Type": "application/json" } }),
    );
    vi.stubGlobal("fetch", fetchMock);

    render(<StrictMode><About /></StrictMode>);

    expect(await screen.findByText("42")).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith("/api/visitors", { method: "POST" });
  });

  it("shows an unavailable state and logs when the counter request fails", async () => {
    const fetchMock = vi.fn<typeof fetch>().mockRejectedValue(new Error("network unavailable"));
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    vi.stubGlobal("fetch", fetchMock);

    render(<About />);

    await waitFor(() => expect(screen.getByText("VISITS UNAVAILABLE")).toBeInTheDocument());
    expect(screen.getByText("—")).toBeInTheDocument();
    expect(errorSpy).toHaveBeenCalled();
  });
});
